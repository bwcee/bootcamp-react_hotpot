const personModel = (seqInstance, seqObj) => {
  return seqInstance.define(
    "person",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: seqObj.INTEGER,
      },
      person: {
        allowNull: false,
        type: seqObj.TEXT,
      },
      amount: {
        type: seqObj.DECIMAL(10, 2),
      },
      billId: {
        allowNull: false,
        type: seqObj.INTEGER,
        references: {
          model: {
            tableName: "bills",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: seqObj.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: seqObj.DATE,
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      // => updatedAt and createdAt will point to created_at and updated_at in the db
      underscored: true,
    }
  );
};

module.exports = personModel;
