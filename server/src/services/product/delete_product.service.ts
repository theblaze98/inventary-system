import { UserModel } from '@/models'

const deleteProduct = async (id: string) => {
	return UserModel.findOneAndDelete({ id })
}

export default deleteProduct
