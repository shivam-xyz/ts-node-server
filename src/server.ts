import express, { Request, Response } from 'express';
import {connectDB} from './config/db'
import userRoutes from './routes/userRoutes';

const app = express();

//Middleware to parse JSON requests
app.use(express.json());

//DB Connection Initialization
// connectDB();

//Use the user routes
app.use('/api/users', userRoutes);

//Demo Route
app.get('/', (req: Request, res: Response) => {
    res.status(200).send({ message: 'Hi, i am Backend Api' })
});

//Start Server
const port: number | string = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is Running on Port : ${port}`);
});