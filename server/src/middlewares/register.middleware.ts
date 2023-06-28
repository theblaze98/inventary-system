import { NextFunction, Request, Response } from 'express'
import { ZodError } from 'zod'
import { registerValidation } from '@/validation/input'

const registerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        registerValidation.parse(req.body)
        next()
    } catch (error) {
        if (error instanceof ZodError) {
            res.status(400).json({
                message: error.issues[0].message
            })
        }
    }
}

export default registerMiddleware
