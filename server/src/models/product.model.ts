import { Schema, model } from 'mongoose'
import { ProductInterface } from '@/interfaces'

const ProductSchema = new Schema<ProductInterface>({
    id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    amount: {
        type: Number,
        require: true
    }
}, { timestamps: true })

export default model('products', ProductSchema)
