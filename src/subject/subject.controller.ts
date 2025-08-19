import TenantModel from '../tenant/tenant.model';
import SubjectModel from './subject.model'
import { SubjectDoc } from './subject.model';
import { Request, Response } from 'express'


export const setSubject = async(req: Request, res: Response):Promise<any>=>{

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

	const newSubject:SubjectDoc = await new SubjectModel({
		tenantId:tenant._id,
		...body
	}).save()

	res.status(200).json({message:"Subject saved "})

	
}


export const updateSubject = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const body = req.body;

    
    const isExist = await SubjectModel.findById(id);
    if (!isExist) {
      return res.status(404).json({ message: "Section does not exist" });
    }

   
    const updatedSection = await SubjectModel.findByIdAndUpdate(
      id,            
      { $set: body }, 
      { new: true }   
    );

    res.status(200).json({ message: "Subject updated", data: updatedSection });
  } catch (error: any) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


export const deleteSubject = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;//should be subject id
    const tenantToken = req.cookies?.TenantToken;

    if (!tenantToken) {
      return res.status(400).json({ message: "Missing tenant token in cookie" });
    }

    // find tenant
    const tenant = await TenantModel.findOne({ tenantToken });
    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found for provided token" });
    }

  
    const deletedSection = await SubjectModel.findOneAndDelete({
      _id: id,
      tenantId: tenant._id
    });

    if (!deletedSection) {
      return res.status(404).json({ message: "Subject not found or not owned by tenant" });
    }

    res.status(200).json({ message: "Subject deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

