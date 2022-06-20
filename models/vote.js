const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrment: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            refernces: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            ALLOWnULL: false,
            refernces: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote'
    }
);

module.exports = Vote;