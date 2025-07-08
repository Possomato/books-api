import { Router } from 'express'
import { bookRouter } from './books.routes.ts'
const routes = Router()

routes.use('/books', bookRouter)

export { routes }
