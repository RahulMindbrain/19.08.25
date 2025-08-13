
import exception from '../util/exeception.util'
import UserModel from './user.model'
import { Request, Response } from 'express'


export const fetchUser = async(req: Request, res: Response):Promise<any>=>{
	try{
		const user = await UserModel.find()
		if(!user) 
			return res.status(404).json({"data":"data not found!"})
		res.json({"data":user})
	}
	catch(err:any){
		res.status(500).json({"data":"something wents worng please try again later"})
	}
}

export const createUser = exception(async(req: Request, res: Response):Promise<any>=>{
		const data = req.body
		const newuser = new UserModel(data)
		await newuser.save()
		res.json({"data":newuser})
	
	
})
