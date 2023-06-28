import { NextFunction, Response } from 'express'
import { RequestExtendInterface } from '@/interfaces'
import { descryptToken } from '@/utils/token.utils'
import { UnauthorizedError } from '@/errors'
import errorValidation from '@/validation/error'

const isAuthenticatedMiddleware = async (
	req: RequestExtendInterface,
	res: Response,
	next: NextFunction
) => {
	try {
		const { token } = req.cookies
		if (token) throw new UnauthorizedError('not token')
		const { id } = descryptToken(token)
		req.userId = id
		next()
	} catch (error) {
		const errorInfo = errorValidation(error)
		res.status(errorInfo.statusCode).json(errorInfo)
	}
}

export default isAuthenticatedMiddleware
