"use strict";

require("dynamoose");

const PeopleModel = require("./people.schema.js");

exports.handler = async (event) => {
  try {
    const id = event.queryStringParameters && event.queryStringParameters.id;
    const { name, phone } = JSON.parse(event.body);
    const data = await PeopleModel.update({"id":id}, {"name":name}, {"phone":phone})
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }
};
