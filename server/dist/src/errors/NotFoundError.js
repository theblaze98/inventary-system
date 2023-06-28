"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NotFoundError extends Error {
    constructor() {
        super(...arguments);
        this.statusCode = 404;
    }
}
exports.default = NotFoundError;
