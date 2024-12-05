//Type for User role -  this could be used for authorization, etc.
export type UserRole = 'admin' | 'user' | 'guest';

//Type for User update DTO (Data Transfer Object)
export type UserUpdateDTO = {
    name?: string;
    email?: string;
    age?: number
};