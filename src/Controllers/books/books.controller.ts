import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { BookDTO } from '../../DTO/books.dto'
import { BooksService } from 'src/Services/books/books.service';
import { Book } from 'src/mongo/Interfaces/book.interface';

@Controller('books')
export class BooksController {

    constructor(
        private readonly bookService : BooksService
    ){}

    @Get()
    async getAllBooks(): Promise<Book[]>{
        return await this.bookService.getAllBooks();
    }

    @Get(':bookID')
    async getBookById(@Param('bookID') bookID : string): Promise<Book>{
        return await this.bookService.getBookById(bookID);
    }

    @Get('name/:bookName')
    async getBookByName(@Param('bookName') bookName : string): Promise<Book[]>{
        return await this.bookService.getBookByName(bookName);
    }

    @Get('author/:authorName')
    async getBookByAuthorName(@Param('authorName') authorName : string): Promise<Book[]>{
        return await this.bookService.getBookByAuthorName(authorName);
    }

    @Post() 
    async saveBook(@Body() newBook : BookDTO): Promise<Book> {
        return await this.bookService.saveBook(newBook);
    }

    @Patch(':bookID')
    async updateBook(@Param('bookID') bookID : string, @Body() newBook : BookDTO): Promise<Book>{
        return await this.bookService.updateBookById(bookID, newBook); 
    }

    @Delete(':bookID')
    async deleteBookById(@Param('bookID') bookID : string) : Promise<Book>{
        return await this.bookService.deleteBookById(bookID);
    }
}