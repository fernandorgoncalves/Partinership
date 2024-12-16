import UserRepository from "../repositories/users.repositories.js";
import bcrypt from 'bcrypt'

async function createUserService(newUser){
    const foundUser = await UserRepository.findUserByEmailRepository(newUser.email)
    if(foundUser) throw new Error("Email already registered")

     const passHash = await bcrypt.hash(newUser.password, 10)
     newUser.password = passHash
    
    
    const user = await UserRepository.CreateUserRepository({
        ...newUser,
         password: passHash
        });
        if(!user) throw new Error("Error creating user")
    return user;
}
export default {createUserService}