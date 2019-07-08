const Sequelize = require("sequelize");
const sequelize = require("../config/database");

class Team extends Sequelize.Model{}
    Team.init({
        teamName:{ 
        type: Sequelize.STRING,
        allowNull: false
        },
    teamCode:{
        type: Sequelize.STRING,
        allowNull: false
    },
    members:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    logoUrl:{
        type: Sequelize.STRING,
        allowNull: false
    }
    }, {sequelize})

    module.exports = Team;