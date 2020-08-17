// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: (callback) => {
    orm.selectAll("burgers", (res) => {
      callback(res);
    });
  },

  insertOne: (cols, vals, callback) => {
    orm.insertOne("burgers", cols, vals, (res) => {
      callback(res);
    });
  },
  updateOne: (objColVals, condition, callback) => {
    orm.updateOne("burgers", objColVals, condition, (res) => {
      callback(res);
    });
  },

  deleteOne: (condition, callback) => {
    orm.deleteOne("burgers", condition, (res) => {
      callback(res);
    });
  },
};

//* Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
