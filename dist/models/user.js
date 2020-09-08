"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("@/schemas/user"));
const User = mongoose_1.default.model('User', user_1.default, 'users');
// User.find({}, (err, data) => {
//     console.log(err, data);
// })
exports.default = User;
