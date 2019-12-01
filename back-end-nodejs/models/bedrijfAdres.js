var Sequelize = require("sequelize")

module.exports = (sequelize) =>{
    class BedrijfAdres extends Sequelize.Model{}
    BedrijfAdres.init({

    },{
        sequelize,
        modelName:"bedrijf_adres",
        tableName:"bedrijf_adres",
        freezeTableName: true

    })

    return BedrijfAdres
}