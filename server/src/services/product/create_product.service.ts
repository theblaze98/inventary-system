import { ProductInterface } from "@/interfaces";
import { ProductModel } from "@/models";

const createProduct = async ({ id, name, amount }: ProductInterface) => {
    const newProduct = new ProductModel({
        id,
        name,
        amount
    })

    return await newProduct.save()
}

export default createProduct
