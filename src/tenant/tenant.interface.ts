// Interface
export interface Tenants{
  tname: string,               // Organization/School name
  tenantToken: string,        // Unique secure tenant identifier
  createdAt: Date,
  isActive: boolean
}
