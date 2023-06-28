"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnauthorizedError extends Error {
    constructor() {
        super(...arguments);
        this.statusCode = 401;
    }
}
exports.default = UnauthorizedError;
