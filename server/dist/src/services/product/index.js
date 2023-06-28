"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProducts = exports.getProduct = exports.getAllProducts = exports.deleteProduct = exports.createProduct = exports.addProducts = void 0;
var add_products_service_1 = require("./add_products.service");
Object.defineProperty(exports, "addProducts", { enumerable: true, get: function () { return __importDefault(add_products_service_1).default; } });
var create_product_service_1 = require("./create_product.service");
Object.defineProperty(exports, "createProduct", { enumerable: true, get: function () { return __importDefault(create_product_service_1).default; } });
var delete_product_service_1 = require("./delete_product.service");
Object.defineProperty(exports, "deleteProduct", { enumerable: true, get: function () { return __importDefault(delete_product_service_1).default; } });
var get_all_products_service_1 = require("./get_all_products.service");
Object.defineProperty(exports, "getAllProducts", { enumerable: true, get: function () { return __importDefault(get_all_products_service_1).default; } });
var get_product_service_1 = require("./get_product.service");
Object.defineProperty(exports, "getProduct", { enumerable: true, get: function () { return __importDefault(get_product_service_1).default; } });
var remove_products_service_1 = require("./remove_products.service");
Object.defineProperty(exports, "removeProducts", { enumerable: true, get: function () { return __importDefault(remove_products_service_1).default; } });
