import { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'
import { loginValidation } from '@/validation/input'

const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
    try {
        loginValidation.parse(req.body)
        next()
    } catch (error) {
        if (error instanceof ZodError) {
			res.status(400).json({
				message: error.issues[0].message,
			})
		}
    }
}

export default loginMiddleware
