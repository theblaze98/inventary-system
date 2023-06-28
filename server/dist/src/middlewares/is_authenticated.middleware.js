"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const token_utils_1 = require("@/utils/token.utils");
const errors_1 = require("@/errors");
const error_1 = __importDefault(require("@/validation/error"));
const isAuthenticatedMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { token } = req.cookies;
        if (token)
            throw new errors_1.UnauthorizedError('not token');
        const { id } = (0, token_utils_1.descryptToken)(token);
        req.userId = id;
        next();
    }
    catch (error) {
        const errorInfo = (0, error_1.default)(error);
        res.status(errorInfo.statusCode).json(errorInfo);
    }
});
exports.default = isAuthenticatedMiddleware;
