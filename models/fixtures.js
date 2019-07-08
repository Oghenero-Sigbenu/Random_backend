const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class Fixtures extends Sequelize.Model{}
    Fixtures.init({
        Group_A:{
            type: Sequelize.STRING,
            allowNull: false
            },
        Group_B:{
            type: Sequelize.STRING,
            allowNull: false
            },
        Staduim:{
            type: Sequelize.STRING,
            allowNull: false
            },
        Group_A_Score:{
            type: Sequelize.INTEGER,
            allowNull: false
            },
        Group_B_Score:{
            type: Sequelize.STRING,
            allowNull: false
            },
        Match_date:{
           type: Sequelize.DATE,
           allowNull: true
        },
       date_created:{
            type: Sequelize.DATE,
            allowNull: true
         }

    },{sequelize})

    
 module.exports = Fixtures;