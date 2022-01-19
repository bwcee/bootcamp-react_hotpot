const billModel = (seqInstance, seqObj) => {
  return seqInstance.define(
    "bill",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: seqObj.INTEGER,
      },
      bill: {
        allowNull: false,
        type: seqObj.TEXT,
      },
      total: {
        type: seqObj.DECIMAL(10,2),
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

module.exports = billModel;
