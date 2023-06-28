"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const registerValidation = zod_1.z.object({
    username: zod_1.z.string().nonempty('username is required'),
    rol: zod_1.z.string().nonempty('rol is required'),
    password: zod_1.z.string().nonempty('password is required'),
});
exports.default = registerValidation;
