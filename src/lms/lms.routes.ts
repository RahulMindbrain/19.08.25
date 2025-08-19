import express from 'express'
const LmsRouter = express.Router()
import { GetSchoolInfra,SavingSchoolInfra,PSchoolSettingsMaster,GSchoolSettingsMaster, UpdateSchoolInfra, USchoolSettingsMaster } from './lms.controller'

//saveSchoolInfra

LmsRouter.get('/saveSchoolInfra/:id', GetSchoolInfra );
LmsRouter.post('/saveSchoolInfra', SavingSchoolInfra );
LmsRouter.put('/saveSchoolInfra/:id/update', UpdateSchoolInfra );


//SchoolSettingMaster
LmsRouter.get('/SchoolSettingsMaster/:id', GSchoolSettingsMaster );
LmsRouter.post('/SchoolSettingsMaster', PSchoolSettingsMaster );
LmsRouter.put('/SchoolSettingsMaster/:id', USchoolSettingsMaster );


export default LmsRouter