import { Schema, model } from 'mongoose'
import { UserInterface } from '@/interfaces'

const UserSchema = new Schema<UserInterface>(
	{
		id: {
			type: String,
			require: true,
		},
		username: {
			type: String,
			require: true,
			unique: true,
		},
		rol: {
			type: String,
			require: true,
		},
		password: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true }
)

export default model('users', UserSchema)
