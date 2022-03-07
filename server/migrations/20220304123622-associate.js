"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("plans", {
      fields: ["user_id"],
      type: "foreign Key",
      name: "FK_plans_users",
      references: {
        table: "users",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });

    await queryInterface.addConstraint("categories", {
      fields: ["plan_id"],
      type: "foreign Key",
      name: "FK_categories_plans",
      references: {
        table: "plans",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("plans", "FK_plans_users");
    await queryInterface.removeConstraint("categories", "FK_categories_plans");
  },
};
