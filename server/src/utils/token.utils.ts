import 'dotenv/config'
import { sign, verify, JwtPayload } from 'jsonwebtoken'

interface JWT extends JwtPayload {
    id: string
}

const generateToken = (id: string) => {
	return sign({ id }, process.env.JWT_SECRET!, {
		expiresIn: '1d',
	})
}

const descryptToken = (token: string): JWT => {
    return verify(token, process.env.JWT_SECRET!) as JWT
}

export { generateToken, descryptToken }
