import { Request, Response } from 'express';

const users = [
    { id: 1, name: "Suza Zuja" },
    { id: 2, name: "Jane Morina" }
];

export const getUsers = async (req: Request, res: Response) => {
    try {
        const allUsers = await users;
        res.status(200).send({ message: "All Users Fetched Successfully", data: allUsers });
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