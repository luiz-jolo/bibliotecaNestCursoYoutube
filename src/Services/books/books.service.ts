import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { BookRepository } from 'src/mongo/Repositories/book.repository';
import { Book } from 'src/mongo/Interfaces/book.interface';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository : BookRepository
    ){}


    async saveBook(newBook: BookDTO) : Promise<Book> {
        return await this.bookRepository.saveBook(newBook);
    }

}
