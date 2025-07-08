import { Router } from 'express'
import { BookController } from '../controllers/BookController.js'

const bookController = new BookController()

const bookRouter = Router()

bookRouter.post('/', bookController.create)
bookRouter.get('/', bookController.index)
bookRouter.get('/:id', bookController.show)
bookRouter.delete('/:id', bookController.delete)

export { bookRouter }
