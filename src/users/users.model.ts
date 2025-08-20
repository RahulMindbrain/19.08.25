import { model, Schema } from 'mongoose'

const schema = new Schema({
	
},{timestamps: true})

const UsersModel = model('Users', schema)
export default UsersModel