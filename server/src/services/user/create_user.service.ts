import { UserInterface } from '@/interfaces'
import { UserModel } from '@/models'

const createUser = async ({ id, username, rol, password }: UserInterface) => {
	const newUser = new UserModel({
		id,
		username,
		rol,
		password,
	})

	return await newUser.save()
}

export default createUser
