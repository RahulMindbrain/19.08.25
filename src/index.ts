import dotenv from 'dotenv'
import mongoose from 'mongoose'
import SectionRouter from './section/section.routes'
import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'
import SubjectRouter from './subject/subject.routes'
import TenantRouter from './tenant/tenant.routes'
import LmsRouter from './lms/lms.routes'
import cookieParser = require('cookie-parser')
dotenv.config()

mongoose.connect(process.env.DB as string).then(()=>console.log("🛢️ connected"))
  .catch((e:any)=>console.log("😒 Database Connection error 💀"));



const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());






app.use('/tenant',TenantRouter)
app.use('/lms',LmsRouter)
app.use('/section', SectionRouter)
app.use('/subject', SubjectRouter)


app.listen(8080,()=>{
    console.log("http://localhost:8080/");
})


import UsersRouter from './users/users.routes'

app.use('/users', UsersRouter)