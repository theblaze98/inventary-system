import { Request } from 'express'

interface RequestExtend extends Request {
	userId?: string
}

export default RequestExtend
