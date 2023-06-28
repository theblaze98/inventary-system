import { ProductInterface } from '@/interfaces'
import { ProductModel } from '@/models'

type params = {
	id?: string
	name?: string
}

const getProduct = async ({
	id,
	name,
}: params): Promise<ProductInterface | null> => {
	if (id) return await ProductModel.findOne({ id })
	return await ProductModel.findOne({ name })
}

export default getProduct
