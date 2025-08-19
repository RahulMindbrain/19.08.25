import { model, Schema, Document } from 'mongoose'
import { Subjects } from './subject.interface'

export interface SubjectDoc extends Subjects,Document{};


const subjectSchema = new Schema<SubjectDoc>({

    tenantId:{
        type:Schema.Types.ObjectId,
        required:true,
    },
    academicSessionId:{
        type:Schema.Types.ObjectId,

    },
    classIds:{
        type:Schema.Types.ObjectId
    },
    subjectName:{
        type:String
    }



	
},{timestamps: true})

const SubjectModel = model<SubjectDoc>('Subject', subjectSchema)
export default SubjectModel


