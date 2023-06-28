"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const loginValidation = zod_1.z.object({
    username: zod_1.z.string().nonempty('username is required'),
    password: zod_1.z.string().nonempty('password is required'),
});
exports.default = loginValidation;
