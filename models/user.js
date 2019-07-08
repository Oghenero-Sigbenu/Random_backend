const Sequelize = require("sequelize");

//sequelize from database
const sequelize = require("../config/database");

class User extends Sequelize.Model{} {
    //creating fields on the user table
    User.init({
        firstName:{
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName:{
            type: Sequelize.STRING,
            allowNull: false
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        username:{
            type: Sequelize.STRING,
            allowNull: false
        },
        role:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {sequelize})
}
module.exports = User;