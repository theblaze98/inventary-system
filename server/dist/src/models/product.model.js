"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('products', ProductSchema);
