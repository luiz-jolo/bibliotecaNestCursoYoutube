import { BadRequestException, Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { BookRepository } from 'src/mongo/Repositories/book.repository';
import { Book } from 'src/mongo/Interfaces/book.interface';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository : BookRepository
    ){}

    async getAllBooks(): Promise<Book[]>{
        const allBooks = await this.bookRepository.getAllBooks();
        if(!allBooks.length){
            throw new BadRequestException('There are no books registered yet');
        }
        return allBooks;
    }

    async getBookById(bookID : string): Promise<Book>{
        try {
            return await this.bookRepository.getBookById(bookID);
        } catch (error) {
            throw new BadRequestException('There are no results for this identifier');
        }
    }
    
    async saveBook(newBook : BookDTO) : Promise<Book> {
        return await this.bookRepository.saveBook(newBook);
    }

    async updateBookById(bookID : string, newBook : BookDTO) : Promise<Book>{
        try {
            const updatedBook = await this.bookRepository.updateBookById(bookID, newBook);
            if(!updatedBook){
                throw new BadRequestException('Faliure to update this book!');
            }
            return this.bookRepository.getBookById(bookID);
        } catch (error) {
            throw new BadRequestException('This book id does not found');
        }
    }

    async deleteBookById(bookID : string): Promise<Book>{
        try {
            return await this.bookRepository.deleteBookById(bookID);
        } catch (error) {
            throw new BadRequestException('This book does not exist');
        }
    }
    
}
