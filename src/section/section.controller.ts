import TenantModel from '../tenant/tenant.model';
import SectionModel from './section.model'
import { Request, Response } from 'express'
import { SectionDoc } from './section.model';

export const setSection = async(req: Request, res: Response):Promise<any>=>{

	const body = req.body;
    const tenantToken = req.cookies?.TenantToken;

	 if (!tenantToken) {
      return res.status(400).json({ message: "Missing tenant token in cookie" });
    }

    const tenant = await TenantModel.findOne({ tenantToken });

    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found for provided token" });
    }

	const newSection:SectionDoc = await new SectionModel({
		...body
	}).save();

	res.status(200).json({message:"section saved",data:newSection});


	
}


export const updateSection = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const body = req.body;

    
    const isExist = await SectionModel.findById(id);
    if (!isExist) {
      return res.status(404).json({ message: "Section does not exist" });
    }

   
    const updatedSection = await SectionModel.findByIdAndUpdate(
      id,            
      { $set: body }, 
      { new: true }   
    );

    res.status(200).json({ message: "Section updated", data: updatedSection });
  } catch (error: any) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


export const deleteSubject = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;//should be section id
    const tenantToken = req.cookies?.TenantToken;

    if (!tenantToken) {
      return res.status(400).json({ message: "Missing tenant token in cookie" });
    }

    // find tenant
    const tenant = await TenantModel.findOne({ tenantToken });
    if (!tenant) {
      return res.status(404).json({ message: "Tenant not found for provided token" });
    }

  
    const deletedSection = await SectionModel.findOneAndDelete({
      _id: id,
      tenantId: tenant._id
    });

    if (!deletedSection) {
      return res.status(404).json({ message: "Section not found or not owned by tenant" });
    }

    res.status(200).json({ message: "Section deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};




