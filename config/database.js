const Sequelize = require("sequelize");


//Creates a Sequelize instance and sets the database config
const sequelize = new Sequelize("Football_fixtures","root", "root",{
    host:"localhost",
    dialect:"mysql",
    // socketPath: '/var/run/mysqld/mysqld.sock'
});

module.exports = sequelize;
