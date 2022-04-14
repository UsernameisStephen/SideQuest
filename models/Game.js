const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Game extends Model { }

Game.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        release_date: {
            type: DataTypes.STRING,
            validate: {
                isDate: true
            }
        },
        developers: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.INTEGER,
            
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        },
        comment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "comment",
                key: "id"
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);

module.exports = Game;