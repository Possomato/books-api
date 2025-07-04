import Express from "express";

const app = Express()

const PORT = 8080

app.get('/', (req, res) => {
  res.send('hello books')
})

app.listen(PORT)

console.log(`I'm running on http://localhost:${PORT}`)