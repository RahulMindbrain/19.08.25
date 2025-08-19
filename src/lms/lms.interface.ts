// Interface
import mongoose from "mongoose"
export interface school_infra_master {
  
  tenantId: mongoose.Types.ObjectId,
  total_classrooms: number,
  total_labs: number,
  library_available: boolean,
  library_details?: string,
  sports_facilities: [string],
  transport_facility: boolean,
  transport_routes: [string],
  createdAt: Date,
  updatedAt: Date
}


export interface school_settings_master{
  tenantId: mongoose.Types.ObjectId,
  timezone: string,
  default_language:"English" | "Odia" | "Hindi" | "Telugu" | "Tamil",
  grading_system:"A+" | "A" | "B" | "C" | "D" | "F",
  attendance_type:"Present"  | "Absent"  | "Late"  | "Excused"  | "Half Day"  | "Sick Leave"  | "On Leave",
  examination_pattern: "Theory" | "Practical" | "Oral" | "Project" | "Mixed",
  createdAt: Date,
  updatedAt: Date
}
