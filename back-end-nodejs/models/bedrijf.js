var Sequelize = require("sequelize")

module.exports = (sequelize) =>{
    class Bedrijf extends Sequelize.Model{}
    Bedrijf.init({
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        naam:{
            type:Sequelize.STRING,
            unique:true

        },
        beschrijving:Sequelize.STRING,
        omvang:Sequelize.FLOAT,
        aantal_werknemers:Sequelize.INTEGER,
        avatar_color:Sequelize.STRING,
        avatar_image_url:Sequelize.STRING

    },{
        sequelize,
        modelName:"bedrijf",
        tableName:"bedrijf",
        name:{
            singular:"bedrijf",
            plural:"bedrijven"
        }
    })



    return Bedrijf
}