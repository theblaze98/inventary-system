import { z } from 'zod'

const loginValidation = z.object({
	username: z.string().nonempty('username is required'),
	password: z.string().nonempty('password is required'),
})

export default loginValidation
