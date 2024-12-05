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
exports.createUsers = exports.getUsers = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const users = [
    { id: 1, name: "Suza Zuja" },
    { id: 2, name: "Jane Morina" }
];
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const allUsers = await users;
        // res.status(200).send({ message: "All Users Fetched Successfully", data: allUsers });
        const latestUsers = yield userModel_1.default.aggregate([
            { $sort: { createdAt: -1 } },
            { $limit: 25 }
        ]);
        res.status(200).send({
            message: "Latest 25 users fetched successfully",
            data: latestUsers
        });
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});
exports.getUsers = getUsers;
const createUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const newUser = { id: users.length + 1, name };
        users.push(newUser);
        res.status(201).json({ message: "User Created Successfully", data: newUser });
    }
    catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});
exports.createUsers = createUsers;
