import { model, Schema, Document } from "mongoose";
import { school_infra_master,school_settings_master } from "./lms.interface";

export interface SchoolInfraMasterDoc extends school_infra_master, Document {}
export interface SchoolSettingsMasterDoc extends school_settings_master,Document{}

const SchoolInfraschema = new Schema<SchoolInfraMasterDoc>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      //required: true,
    },
    total_classrooms: {
      type: Number,
      min: [1, "At least one classroom is required"],
      max: [200, "Too many classrooms specified"],
     // required: true,
    },
    total_labs: {
      type: Number,
     // required: true,
      min: [0, "Number of labs cannot be negative"],
    },
    library_available: {
      type: Boolean,
    },
    library_details: {
      type: String,
      maxlength: [500, "Library details cannot exceed 500 characters"],
    },
    sports_facilities: {
      type: [String],
      //required: true,
    },
    transport_facility: {
      type: Boolean,
    },
    transport_routes: {
      type: [String],
    },
  },
  { timestamps: true }
);

const SchoolSettingsMasterSchema = new Schema<SchoolSettingsMasterDoc>({
  tenantId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Tenant' // Optional, if you have a Tenant collection
  },
  timezone: {
    type: String,
    required: true,
    // Simple regex to validate typical timezone format like "Asia/Kolkata"
    match: [/^[A-Za-z]+\/[A-Za-z_]+$/, 'Invalid timezone format'],
  },
  default_language: {
    type: String,
    enum: ["English", "Odia", "Hindi", "Telugu", "Tamil"],
    required: true,
    default: "English"
  },
  grading_system: {
    type: String,
    enum: ["A+", "A", "B", "C", "D", "F"],
    required: true,
    default: "A"
  },
  attendance_type: {
    type: String,
    enum: ["Present", "Absent", "Late", "Excused", "Half Day", "Sick Leave", "On Leave"],
    required: true,
    default: "Present"
  },
  examination_pattern: {
    type: String,
    enum: ["Theory", "Practical", "Oral", "Project", "Mixed"],
    required: true,
    default: "Theory"
  }
}, { timestamps: true });

export const SchoolSettingsMasterModel = model<SchoolSettingsMasterDoc>(
  'SchoolSettingsMaster',
  SchoolSettingsMasterSchema
);

export const SchoolInfraschemaModel = model<SchoolInfraMasterDoc>("Lms", SchoolInfraschema);


