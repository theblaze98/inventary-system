import { z } from 'zod'

const registerValidation = z.object({
    username: z.string().nonempty('username is required'),
    rol: z.string().nonempty('rol is required'),
    password: z.string().nonempty('password is required'),
})

export default registerValidation
