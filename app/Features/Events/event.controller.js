const catchError = require("../../Error/AsyncErrorHandler");

export const getAllevent = catchError(async (req, res, next) => {
  // Logic for fetching all event resources
});

export const geteventById = catchError(async (req, res, next) => {
  // Logic for fetching a event resource by ID
});

export const createevent = catchError(async (req, res, next) => {
  // Logic for creating a new event resource
});

export const updateevent = catchError(async (req, res, next) => {
  // Logic for updating a event resource by ID
});

export const deleteevent = catchError(async (req, res, next) => {
  // Logic for deleting a event resource by ID
});
