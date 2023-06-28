import { BadRequestError, NotFoundError, UnauthorizedError } from "@/errors"

const errorValidation = (error: any) => {
	if (error instanceof NotFoundError) return {statusCode: error.statusCode, message: error.message}
	if (error instanceof BadRequestError) return {statusCode: error.statusCode, message: error.message}
	if (error instanceof UnauthorizedError) return {statusCode: error.statusCode, message: error.message}
    return { statusCode: 500, message: 'an error have ocurred', error }
}

export default errorValidation
