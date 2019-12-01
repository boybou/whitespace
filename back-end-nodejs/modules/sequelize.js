
let Sequilize = require('sequelize')
let getModels = require('../models/index')

let seq = new Sequilize('whitespace', 'postgres','postgres', { host : 'localhost', dialect: 'postgres'});


// if(process.env.NODE_ENV === "prod"){
//     seq = new Sequilize('whitespace', 'postgres','postgres', { host : 'postgres', dialect: 'postgres'})
// }
// else if(process.env.NODE_ENV === "dev"){
//     seq = new Sequilize('whitespace', 'postgres','postgres', { host : 'postgres', dialect: 'postgres'})
// }


let models = getModels(seq);


seq.sync({force:true}).then(async function(){


})


seq.authenticate()
.then(() => console.log("connected"))
.catch(err => console.err("couldnt connect",err))


module.exports = models