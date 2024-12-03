const catchError = require('../../Error/AsyncErrorHandler');

export const getAlluser = catchError(async (req, res, next) => {
    // Logic for fetching all user resources
});

export const getuserById = catchError(async (req, res, next) => {
    // Logic for fetching a user resource by ID
});

export const createuser = catchError(async (req, res, next) => {
    // Logic for creating a new user resource
});

export const updateuser = catchError(async (req, res, next) => {
    // Logic for updating a user resource by ID
});

export const deleteuser = catchError(async (req, res, next) => {
    // Logic for deleting a user resource by ID
});