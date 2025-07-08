import Express from 'express'
import { routes } from './routes'

const app = Express()

const PORT = 8080

app.use(Express.json())

app.use(routes)

app.listen(PORT)

console.log(`I'm running on http://localhost:${PORT}`)
