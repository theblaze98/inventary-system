import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import './config/module_alias'
import connectDB from './config/db'
import v1Routes from './routes/v1'



const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(morgan("dev"))
app.use(cookieParser())

app.use('/api/v1', v1Routes)

app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server is running in http://localhost:${PORT}`)
})
