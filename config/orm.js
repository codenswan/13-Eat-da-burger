//* Import MySQL connection.
const connection = require("../config/connection.js");

const printQuestionMarks = (num) => {
  const arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.join();
};

//* Helper function to convert object key/value pairs to SQL syntax
const objToSql = (ob) => {
  const arr = [];

  for (const key in ob) {
    let value = ob[key];
    
    if (Object.hasOwnProperty.call(ob, key)) {
      
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      
      arr.push(key + "=" + value);
    }
  }

  //* translate array of strings to a single comma-separated string
  return arr.join();
};

//* Object for all our SQL statement functions.
const orm = {
  selectAll: (tableInput, callback) => {
    const queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  insertOne: (table, cols, vals, callback) => {
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.join();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
  updateOne: (table, objColVals, condition, callback) => {
    let queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
  deleteOne: (table, condition, callback) => {
    let queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      callback(result);
    });
  },
};

//* Exports the orm object for the model 
module.exports = orm;