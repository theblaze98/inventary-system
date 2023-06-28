import { ProductInterface } from "@/interfaces";
import { ProductModel } from "@/models";

const getAllProducts = async (): Promise<ProductInterface[]> => {
    return await ProductModel.find()
}

export default getAllProducts
