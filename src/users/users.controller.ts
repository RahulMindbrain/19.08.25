import UsersModel from './users.model'
import { Request, Response } from 'express'

export const fetchUsers = (req: Request, res: Response)=>{
	res.send("Hello")
}