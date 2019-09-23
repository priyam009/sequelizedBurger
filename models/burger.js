module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      } 
    },
    devoured: {
      type: DataTypes.BOOELAN,
      allowNull: false,
      defaultValue: false
    }
  });

  return Burger;
};