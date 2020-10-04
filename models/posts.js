module.exports = function (sequelize, DataTypes) {
    let Posts = sequelize.define(
    "Posts",
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        author: {
            type: DataTypes.STRING
        }
    },
    {
        freezeTableName: true
    }    
    );

    return Posts;
}