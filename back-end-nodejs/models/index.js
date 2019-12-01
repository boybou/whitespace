
module.exports = (sequelize) => {
    let models = {
        Bedrijf : require("./bedrijf")(sequelize),
        Adres : require('./adres')(sequelize),
        BedrijfAdres : require("./bedrijfAdres")(sequelize)
    }


    models.Bedrijf.belongsToMany(models.Adres,{through:models.BedrijfAdres,foreignKey:"bedrijf_id",onDelete:'CASCADE',hooks:true})
    models.Adres.belongsToMany(models.Bedrijf,{through:models.BedrijfAdres,foreignKey:"adres_id"})

    return models
}