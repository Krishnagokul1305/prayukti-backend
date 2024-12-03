const catchError = require('../../Error/AsyncErrorHandler');

export const getAllregistration = catchError(async (req, res, next) => {
    // Logic for fetching all registration resources
});

export const getregistrationById = catchError(async (req, res, next) => {
    // Logic for fetching a registration resource by ID
});

export const createregistration = catchError(async (req, res, next) => {
    // Logic for creating a new registration resource
});

export const updateregistration = catchError(async (req, res, next) => {
    // Logic for updating a registration resource by ID
});

export const deleteregistration = catchError(async (req, res, next) => {
    // Logic for deleting a registration resource by ID
});