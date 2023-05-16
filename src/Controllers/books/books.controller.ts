import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { BookDTO } from '../../DTO/books.dto'
import { BooksService } from 'src/Services/books/books.service';
import { Book } from 'src/mongo/Interfaces/book.interface';

@Controller('books')
export class BooksController {

    constructor(
        private readonly bookService : BooksService
    ){}

    @Get()
    getAllBooks(): String{
        return 'Todos os livros estão aqui!';
    }

    @Post()
    async saveBook(@Body() newBook : BookDTO): Promise<Book> {
        return await this.bookService.saveBook(newBook);
    }

    @Patch()
    updateBook() : string{
        return 'Este livro foi atualizado';
    }

    @Delete()
    deleteBook() : string{
        return 'Este livro foi apagado';
    }
}