"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
//Middleware to parse JSON requests
app.use(express_1.default.json());
//DB Connection Initialization
// connectDB();
//Use the user routes
app.use('/api/users', userRoutes_1.default);
//Demo Route
app.get('/', (req, res) => {
    res.status(200).send({ message: 'Hi, i am Backend Api' });
});
//Start Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is Running on Port : ${port}`);
});
