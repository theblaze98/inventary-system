import { UserInterface } from '@/interfaces'
import { UserModel } from '@/models'

const getAllUsers = async (): Promise<UserInterface[]> => {
	return await UserModel.find()
}

export default getAllUsers
