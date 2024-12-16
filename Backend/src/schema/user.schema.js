import { z } from "zod";

const userSchema =  z.object({
    username: z.string().min(3,"Username is required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6,"Password must have at least 6 characters"),
});
export { userSchema };