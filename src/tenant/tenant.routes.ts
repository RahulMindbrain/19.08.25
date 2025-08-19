import express from 'express'
const TenantRouter = express.Router()
import { createTenant } from './tenant.controller'



TenantRouter.post('/create-org', createTenant);

export default TenantRouter