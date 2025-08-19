import mongoose from "mongoose";

// Interface

export interface Subjects {
  tenantId: mongoose.Types.ObjectId;
  academicSessionId?: mongoose.Types.ObjectId;
  classIds?: mongoose.Types.ObjectId;
  subjectName: String;
}
