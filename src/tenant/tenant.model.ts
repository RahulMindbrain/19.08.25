import { model, Schema, Document } from "mongoose";
import { Tenants } from "./tenant.interface";
import crypto from "crypto";

export interface TenantDoc extends Tenants, Document {}
const Tenantschema = new Schema<TenantDoc>(
  {
    tname: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
      lowercase: true,
      
    },
    tenantToken: {
      type: String,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

Tenantschema.pre("save", function (next) {
  if (!this.tenantToken) {
    this.tenantToken = crypto.randomBytes(8).toString("hex"); // 32-char secure token
  }
  next();
});

const TenantModel = model<TenantDoc>("Tenant", Tenantschema);
export default TenantModel;
