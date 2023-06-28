"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const input_1 = require("@/validation/input");
const registerMiddleware = (req, res, next) => {
    try {
        input_1.registerValidation.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            res.status(400).json({
                message: error.issues[0].message
            });
        }
    }
};
exports.default = registerMiddleware;
