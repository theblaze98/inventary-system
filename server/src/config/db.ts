import 'dotenv/config'
import { connect } from 'mongoose'

const MONGO_URI = process.env.MONGO_URI as string

const connectDB = async () => {
    try {
        await connect(MONGO_URI)
    } catch (error) {
        console.log(error)
    }
}

export default connectDB
