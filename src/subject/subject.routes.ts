import express from 'express'
const SubjectRouter = express.Router()
import { setSubject,updateSubject } from './subject.controller'

SubjectRouter.post('/set-subject', setSubject)
SubjectRouter.put('/update-subject', updateSubject)

export default SubjectRouter