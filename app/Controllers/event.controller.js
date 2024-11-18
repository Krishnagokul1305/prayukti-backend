const asyncErrorHandler = require("./Error/AsyncErrorHandler");

const getEvents = asyncErrorHandler(async (req, res) => {});

const getEvent = asyncErrorHandler(async (req, res) => {});

const createEvent = asyncErrorHandler(async (req, res) => {});

const updateEvent = asyncErrorHandler(async (req, res) => {});

const deleteEvent = asyncErrorHandler(async (req, res) => {});

module.exports = {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
