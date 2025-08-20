import mongoose from "mongoose";

// Interface
export interface User{
  username: string,
  passwordHash: string,
  roles: mongoose.Types.ObjectId[],
  tenantId: mongoose.Types.ObjectId,
  academicSessionId: mongoose.Types.ObjectId,
  status: string,
  isActive: boolean,
  createdAt: Date,
  lastLogin: Date,
  resetToken: string,
  resetTokenExpires: Date
}



