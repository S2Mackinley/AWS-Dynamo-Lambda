"use strict";

require("dynamoose");

const PeopleModel = require("./people.schema.js");

exports.handler = async (event) => {
  try {
    const id = event.queryStringParameters && event.queryStringParameters.id;
    await PeopleModel.delete({"id":id})
    return {
      statusCode: 204,
      body: JSON.stringify("Deleted Item"),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }
};