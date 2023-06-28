"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("@/errors");
const errorValidation = (error) => {
    if (error instanceof errors_1.NotFoundError)
        return { statusCode: error.statusCode, message: error.message };
    if (error instanceof errors_1.BadRequestError)
        return { statusCode: error.statusCode, message: error.message };
    if (error instanceof errors_1.UnauthorizedError)
        return { statusCode: error.statusCode, message: error.message };
    return { statusCode: 500, message: 'an error have ocurred', error };
};
exports.default = errorValidation;
