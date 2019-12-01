var Sequelize = require("sequelize")

module.exports = (sequelize) =>{
    class Adres extends Sequelize.Model{}
    Adres.init({
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        plaats:Sequelize.STRING,
        postcode:Sequelize.STRING,
        straatnaam_en_nummer:Sequelize.STRING

    },{
        sequelize,
        modelName:"adres",
        tableName:"adres",
        name:{
            singular:"adres",
            plural:"adressen"
        }
    })

    return Adres
}