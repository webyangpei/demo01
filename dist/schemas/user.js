"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = mongoose_1.default.Schema;
const UserSchema = new schema({
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false,
        default: 18
    },
    status: Number
});
exports.default = UserSchema;
