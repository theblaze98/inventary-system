"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = exports.loginValidation = void 0;
var login_validation_1 = require("./login.validation");
Object.defineProperty(exports, "loginValidation", { enumerable: true, get: function () { return __importDefault(login_validation_1).default; } });
var register_validation_1 = require("./register.validation");
Object.defineProperty(exports, "registerValidation", { enumerable: true, get: function () { return __importDefault(register_validation_1).default; } });
