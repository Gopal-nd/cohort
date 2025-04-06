import express from 'express'

import type { Router } from 'express'


export function register():Router{
    const router = express.Router()

    return router
}