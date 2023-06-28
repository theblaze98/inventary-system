import { UserModel } from '@/models'

type params = {
	id: string
	currentAmount: number
	newAmount: number
}

const addProducts = async ({ id, currentAmount, newAmount }: params) => {
	const amount = currentAmount + newAmount
	return await UserModel.findOneAndUpdate({ id }, { amount })
}

export default addProducts
