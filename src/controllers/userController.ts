import { Request, Response } from 'express';
import User from '../models/userModel';

const users = [
    { id: 1, name: "Suza Zuja" },
    { id: 2, name: "Jane Morina" }
];

export const getUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await users;
        res.status(200).send({ message: "All Users Fetched Successfully", data: allUsers });

        // const latestUsers = await User.aggregate([
        //     {$sort : { createdAt : -1 }},
        //     {$limit : 25}
        // ]);

        // res.status(200).send({
        //     message : "Latest 25 users fetched successfully",
        //     data : latestUsers
        // });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
}

export const createUsers = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const newUser = { id: users.length + 1, name };
        users.push(newUser);
        res.status(201).json({ message: "User Created Successfully", data: newUser });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
}