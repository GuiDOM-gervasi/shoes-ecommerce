module.exports.up = (queryInterface, DataTypes) => {
  // create a table
  return queryInterface.createTable(
    "productcategory",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      productId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      categoryId: {
	allowNull: false,
	type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      charset: "utf8",
    }
  );
};

module.exports.down = (queryInterface) =>
  queryInterface.dropTable("categories");
