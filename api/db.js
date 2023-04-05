// const secret = require('./db_credentials.json');
const secret = require('./db_local_credentials.json');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    secret.db_name,
    secret.username,
    secret.password, {
    dialect: 'mysql',
    host: secret.host_name,
    // specify port for linux instance
    //port:63336
}
);
module.exports = sequelize;
