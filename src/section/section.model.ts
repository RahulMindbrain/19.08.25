import { model, Schema, Document } from 'mongoose'
import { section } from './section.interface'

export interface SectionDoc extends section,Document{}; 

const Sectionschema = new Schema<SectionDoc>({

    tenantId:{
        type:Schema.Types.ObjectId,
        required:true,

    },

    academicSessionId:{
        type:Schema.Types.ObjectId,
        //required:true,
    },
    classId:{
        type:Schema.Types.ObjectId,
        //required:true,
    },
    sectionName:{
        type:String,
        //required:true

    },
maxStudent:{
    type:Number,
    maxlength:50,
    //required:true

}




    
	
},{timestamps: true})

const SectionModel = model<SectionDoc>('Section', Sectionschema)
export default SectionModel

/*
import mongoose from "mongoose"
export interface section{
tenantId: mongoose.Types.ObjectId,
academicSessionId?: mongoose.Types.ObjectId,
classId?: mongoose.Types.ObjectId,
sectionName: String,
maxStudent: Number
}
*/