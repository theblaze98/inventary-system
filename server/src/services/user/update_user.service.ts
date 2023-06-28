import { UserModel } from '@/models'

type params = {
	id: string
	username?: string
	password: string
}

const updatePassword = async ({ id, username, password }: params) => {
	if (username)
		return await UserModel.findOneAndUpdate({ id }, { username, password })
	return await UserModel.findOneAndUpdate({ id }, { password })
}

export default updatePassword
