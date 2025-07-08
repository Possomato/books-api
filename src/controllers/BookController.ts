import { Request, Response } from 'express'
import { promises as fs } from 'fs'

const fileUrl = new URL('../../src/data/books.json', import.meta.url)

export class BookController {
  async create(req: Request, res: Response) {
    try {
      const newBook = req.body
      let books = []

      try {
        const existingData = await fs.readFile(fileUrl, 'utf-8')
        books = JSON.parse(existingData)
      } catch (error) {
        books = []
      }

      books.push(newBook)

      await fs.writeFile(fileUrl, JSON.stringify(books, null, 2), 'utf-8')
      res
        .status(201)
        .send({ message: 'Livro criado com sucesso', book: newBook })
    } catch (error) {}
  }

  async index(req: Request, res: Response) {
    try {
      const data = await fs.readFile(fileUrl, 'utf-8')
      res.send(data)
    } catch (error) {
      res.status(500).send(`Erro ao ler arquivo: ${error}`)
    }
  }

  async show(req: Request, res: Response) {
    const { id } = req.params

    const data = await fs.readFile(fileUrl, 'utf-8')
    const books = JSON.parse(data)

    const bookSearch = books.find((item: any) => item.id === id)

    if (bookSearch){
      res.send(bookSearch)
    } else{
      res.send(`${id} não encontrado`)
    }

  }
}
