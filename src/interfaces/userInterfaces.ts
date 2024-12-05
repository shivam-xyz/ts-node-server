import { Document } from 'mongoose';

//IUser interface for the User Model
export interface IUser extends Document {
    name: string;
    email: string;
    age: number;
}

//IUserResponse interface for API Response
export interface IUserResponse {
    id: string;
    name: string;
    email: string;
}


