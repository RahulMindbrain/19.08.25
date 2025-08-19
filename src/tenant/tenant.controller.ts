import TenantModel from './tenant.model'
import { Request, Response } from 'express'

export const createTenant = async (req: Request, res: Response)=>{

	try{
	const body = req.body;
	const newTenant = await new TenantModel(body).save();
	res.cookie('TenantToken', newTenant.tenantToken, {
    httpOnly: true,
    secure: false, // Use true in production (HTTPS)
    maxAge: 10 * 60 * 1000, // 10 minutes
	 path: "/"
  });
  console.log(newTenant._id);

  
  res.status(200).json({message:"Tenant Saved"});




	}
	catch(e:any){
		res.status(500).json({message:"Internal Server Error"});
	}

	
}