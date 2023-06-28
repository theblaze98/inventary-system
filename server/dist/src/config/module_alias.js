"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_alias_1 = __importDefault(require("module-alias"));
const path_1 = __importDefault(require("path"));
const rootDir = path_1.default.join(__dirname, '../..');
console.log(rootDir);
module_alias_1.default.addAliases({
    '@': path_1.default.join(rootDir, 'src')
});
(0, module_alias_1.default)();
