import { NextFunction, Response } from 'express'
import { RequestExtendInterface, roles } from '@/interfaces'
import { NotFoundError, UnauthorizedError } from '@/errors'
import errorValidation from '@/validation/error'
import { getUser } from '@/services/user'

const isAdministratorMiddleware = async (
	req: RequestExtendInterface,
	res: Response,
	next: NextFunction
) => {
	try {
		const id = req.userId
		const user = await getUser({ id })
		if (!user) throw new NotFoundError('user not found')
		if (!user.rol.includes(roles.ADMIN))
			throw new UnauthorizedError('user is not administrator')
		next()
	} catch (error) {
		const errorInfo = errorValidation(error)
		res.status(errorInfo.statusCode).json(errorInfo)
	}
}

export default isAdministratorMiddleware
