"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    id: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
        unique: true,
    },
    rol: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('users', UserSchema);
