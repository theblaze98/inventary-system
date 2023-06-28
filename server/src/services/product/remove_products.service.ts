import { UserModel } from '@/models'

type params = {
	id: string
	currentAmount: number
	removeAmount: number
}

const removeAmount = async ({ id, currentAmount, removeAmount }: params) => {
	const amount = currentAmount - removeAmount
	return await UserModel.findOneAndUpdate({ id }, { amount })
}

export default removeAmount
