const Sequelize = require('sequelize');
const sequelize = require('../dbconfig');
const Model = Sequelize.Model;
class order extends Model {};
order.init({
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    _mealId: Sequelize.INTEGER,
    uTime: Sequelize.DATE,
    topic: Sequelize.STRING,
    status: Sequelize.INTEGER,
    date: Sequelize.STRING,
    weight: Sequelize.BIGINT(22),
    orderDetailId: Sequelize.BIGINT(22),
    _deviceId: Sequelize.INTEGER
}, {
    sequelize,
    timestamps: true,
    createdAt: false,
    updatedAt: 'uTime',
    modelName: 'order'
})

module.exports = order;

