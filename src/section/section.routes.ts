import express from 'express'
const SectionRouter = express.Router()
import { setSection ,updateSection} from './section.controller'

SectionRouter.post('/set-section', setSection)

//section id
SectionRouter.put('/update-section/:id', updateSection)




export default SectionRouter