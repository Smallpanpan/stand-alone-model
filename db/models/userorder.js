const Sequelize = require('sequelize');
const sequelize = require('../dbconfig');
const Model = Sequelize.Model;
class userorder extends Model {};
userorder.init({
    id: {
        type: Sequelize.BIGINT(11),
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    mealId: Sequelize.STRING,
    uTime: Sequelize.DATE,
    topic: Sequelize.STRING,
    status: Sequelize.INTEGER,
    date: Sequelize.STRING,
    weight: Sequelize.BIGINT(22),
    orderId: Sequelize.BIGINT(22)
}, {
    sequelize,
    timestamps: true,
    createdAt: false,
    updatedAt: 'uTime',
    modelName: 'userorder'
})

module.exports = userorder;

