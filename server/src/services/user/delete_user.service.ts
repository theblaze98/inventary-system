import { UserModel } from '@/models'

const deleteUser = async (id: string) => {
	return await UserModel.findOneAndDelete({ id })
}

export default deleteUser
