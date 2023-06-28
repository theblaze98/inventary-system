import { hash, compare } from 'bcryptjs'

const encryptPassword = async (password: string) => {
    return await hash(password, 10);
}

const comparePassword = async (password: string, hash: string) => {
    return await compare(password, hash);
}

export { encryptPassword, comparePassword }
