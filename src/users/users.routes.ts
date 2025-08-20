import express from 'express'
const UsersRouter = express.Router()
import { fetchUsers } from './users.controller'

UsersRouter.get('/', fetchUsers)

export default UsersRouter