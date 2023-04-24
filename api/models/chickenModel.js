const Sequelize = require('sequelize')
const sequelize = require('../db.js')


const Chicken = sequelize.define('Chicken', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: { type: Sequelize.STRING, allowNull: false },
            price: { type: Sequelize.FLOAT, allowNull: false },
            desc: { type: Sequelize.STRING, allowNull: true },
})

module.exports = Chicken;