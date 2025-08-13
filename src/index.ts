import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.DB as string)

import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'

const app = express()
app.listen(8080)

app.use(express.json())
app.use(bodyParser.urlencoded())



