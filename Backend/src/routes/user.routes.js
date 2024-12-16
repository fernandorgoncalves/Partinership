import {Router} from 'express'
import userControlle from '../controller/user.controllers.js'
import { validate} from '../middlewares/validation.middlewares.js'
import {userSchema} from '../schema/user.schema.js'

const router = Router();

router.post('/users',
    validate(userSchema),
    userControlle.createUserController
);

export default router