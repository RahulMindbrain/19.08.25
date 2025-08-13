import { model, Schema } from 'mongoose'

const schema = new Schema({
	fullname: {
        type:String
    },
    mobile: {
        type:String
    }
},{timestamps: true})

const UserModel = model('User', schema)
export default UserModel