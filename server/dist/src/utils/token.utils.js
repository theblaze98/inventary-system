"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.descryptToken = exports.generateToken = void 0;
require("dotenv/config");
const jsonwebtoken_1 = require("jsonwebtoken");
const generateToken = (id) => {
    return (0, jsonwebtoken_1.sign)({ id }, process.env.JWT_SECRET, {
        expiresIn: '1d',
    });
};
exports.generateToken = generateToken;
const descryptToken = (token) => {
    return (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
};
exports.descryptToken = descryptToken;
