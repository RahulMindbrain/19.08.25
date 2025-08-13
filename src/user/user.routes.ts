import express from 'express'
const UserRouter = express.Router()
import { fetchUser,createUser } from './user.controller'

UserRouter.get('/', fetchUser)
UserRouter.post('/', createUser)

export default UserRouter