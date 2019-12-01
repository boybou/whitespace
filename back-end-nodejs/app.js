let unless = (paths, middleware) =>{
  return (req,res,next) =>{
    console.log(paths.includes(req.path))
    if(paths.includes(req.path)){
      return next();
    }
    else{
      return middleware(req,res,next);
    }

  }
}

let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
let jwtMW = require('express-jwt')
let app = express()
let helmet = require("helmet")
let router = express.Router()
let winston = require('winston')
let expressWinston = require('express-winston');
let fs = require('fs');
let https = require("https")
models = require("./modules/sequelize")
asyncWrapper = require('./modules/asyncMiddleware')

let options;
if(process.env.NODE_ENV === "prod"){
  console.log("prodder")
  options = {
    key: fs.readFileSync(fs.realpathSync('./certbot/conf/live/ditiscrm.nl/privkey.pem')),
    cert: fs.readFileSync(fs.realpathSync('./certbot/conf/live/ditiscrm.nl/cert.pem')),
    ca: fs.readFileSync(fs.realpathSync('./certbot/conf/live/ditiscrm.nl/fullchain.pem'))
  };
}
else{
  options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  };
}

let port = 3000
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// const excludedPaths = ['/authorize/','/webhooks/teamwork-projects']
// app.use(unless(excludedPaths,require('./modules/authenticationMiddleware')))

app.use(require('./routes'))




app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.json()
  ),
  meta: true,
  expressFormat: false,
  colorize: true
}));


let httpsServer = https.createServer(options, app);

httpsServer.listen(port)

// app.listen(port, () => console.log(`app running at port ${port}`))

