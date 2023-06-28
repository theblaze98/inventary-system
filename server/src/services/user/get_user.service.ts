import { UserInterface } from '@/interfaces'
import { UserModel } from '@/models'

type params = {
	id?: string
	username?: string
}

const getUser = async ({
	id,
	username,
}: params): Promise<UserInterface | null> => {
	if (id) return await UserModel.findOne({ id })
	return await UserModel.findOne({ username })
}

export default getUser
