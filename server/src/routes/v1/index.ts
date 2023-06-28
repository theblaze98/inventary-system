import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
    res.status(200).json({
        status: 'server listen'
    })
})

export default router
