import {SchoolInfraschemaModel,SchoolSettingsMasterModel} from './lms.model'
import TenantModel from '../tenant/tenant.model';
import { Request, Response } from 'express'

//SchoolInfraschema
export const SavingSchoolInfra = async (req: Request, res: Response): Promise<any> => {
  try {
    const body = req.body;
    const tenantToken = req.cookies?.TenantToken;

    console.log("TenantToken:", tenantToken);

    if (!tenantToken) {
      return res.status(400).json({ message: "Missing tenant token in cookie" });
    }

    const tenant = await TenantModel.findOne({ tenantToken });

    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found for provided token" });
    }

    // ✅ Check if School Infra already exists for this tenant
    const isExist = await SchoolInfraschemaModel.findOne({ tenantId: tenant._id });

    if (isExist) {
      return res.status(400).json({ message: "School Infra already saved for this tenant" });
    }

    // ✅ Save new School Infra
    const details = new SchoolInfraschemaModel({
      tenantId: tenant._id,
      ...body,
    });

    const newDetail = await details.save();

    return res.status(201).json({
      message: "School Details saved successfully",
      data: newDetail,
    });
  } catch (error: any) {
    console.error("❌ SavingSchoolInfra error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const GetSchoolInfra = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const body = req.body;
    const tenantToken = req.cookies?.TenantToken;

    console.log("TenantToken:", tenantToken);

    if (!tenantToken) {
      return res.status(400).json({ message: "Missing tenant token in cookie" });
    }

    const tenant = await TenantModel.findOne({ tenantToken });

    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found for provided token" });
    }

    const Tid = tenant._id;

    // `limit(5)` only works with `.find()`, not `.findOne()`
    const details = await SchoolInfraschemaModel.find({ tenantId: Tid }).limit(5);

    return res.status(200).json({
      message: "Fetched data",
      data: details,
    });
  } catch (error: any) {
    console.error("❌ GetSchoolInfra error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
export const  UpdateSchoolInfra = async  (req: Request, res: Response):Promise<any>=>{
	
	const id=req.params.id;
	const body = req.body;
	//	const tenantToken = req.cookies.TenantToken;
	// console.log(tenantToken);

	//   if (!tenantToken) {
    //   return res.status(400).json({ message: "Missing tenant token in cookie" });
    // }

	//   const tenant = await TenantModel.findOne({ tenantToken });
	//	const id=tenant._id;
    // if (!tenant) {
    //   return res.status(404).json({ message: "Tenant not found for provided token" });
    // }

	const updatedDoc = await SchoolInfraschemaModel.findOneAndUpdate(
      { tenantId: id },
      body,
      { new: true, runValidators: true }
    );
	

	res.status(200).json({message:"data updated",data:updatedDoc});

}




//SchoolSettingsMaster
export const PSchoolSettingsMaster = async  (req: Request, res: Response):Promise<any>=>{
	
	const body = req.body;
	//	const tenantToken = req.cookies.TenantToken;
	// console.log(tenantToken);

	//   if (!tenantToken) {
    //   return res.status(400).json({ message: "Missing tenant token in cookie" });
    // }

	//   const tenant = await TenantModel.findOne({ tenantToken });

    // if (!tenant) {
    //   return res.status(404).json({ message: "Tenant not found for provided token" });
    // }

	const details =new  SchoolSettingsMasterModel ({
		//tenantId: tenant._id,
		...body
	});

	const newDetail = await details.save();

	res.status(200).json({message:"School Setting Saved"});

}


export const GSchoolSettingsMaster = async  (req: Request, res: Response):Promise<any>=>{
	
	const id= req.params.id;
	console.log(id);
	//	const tenantToken = req.cookies.TenantToken;
	// console.log(tenantToken);

	//   if (!tenantToken) {
    //   return res.status(400).json({ message: "Missing tenant token in cookie" });
    // }



	//   const tenant = await TenantModel.findOne({ tenantToken });
	// 	const id=tenant._id;
    // if (!tenant) {
    //   return res.status(404).json({ message: "Tenant not found for provided token" });
    // }

	

	const Detail = await SchoolSettingsMasterModel.findOne({tenantId:id});

	res.status(200).json({message:"School Setting details",data:Detail});

}

export const USchoolSettingsMaster = async  (req: Request, res: Response):Promise<any>=>{
	
	const id= req.params.id;
	const updateData = req.body;
	console.log(id);
	//	const tenantToken = req.cookies.TenantToken;
	// console.log(tenantToken);

	//   if (!tenantToken) {
    //   return res.status(400).json({ message: "Missing tenant token in cookie" });
    // }



	//   const tenant = await TenantModel.findOne({ tenantToken });
	// 	const id=tenant._id;
    // if (!tenant) {
    //   return res.status(404).json({ message: "Tenant not found for provided token" });
    // }

	

	const updatedDoc = await SchoolSettingsMasterModel.findOneAndUpdate(
      { tenantId: id },
      updateData,
      { new: true, runValidators: true } // return updated doc and validate it
    );
	res.status(200).json({message:"School Setting details",data:updatedDoc});

}





