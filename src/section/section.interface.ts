// Interface class_sections = 
import mongoose from "mongoose"
export interface section{
tenantId: mongoose.Types.ObjectId,
academicSessionId?: mongoose.Types.ObjectId,
classId?: mongoose.Types.ObjectId,
sectionName: string,
maxStudent: number

}