import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { BookDTO } from "src/DTO/books.dto";
import { Model } from "mongoose";
import { Book } from "../Interfaces/book.interface";

@Injectable()
export class BookRepository {

    constructor(
        @InjectModel('book') private readonly bookModel: Model<Book>
    ){}

    async getAllBooks() : Promise<Book[]>{
        return await this.bookModel.find({}, { __v: false }).sort({ name : + 1}).exec();
    }

    async getBookById(bookID : string) : Promise<Book>{
        return await this.bookModel.findById(bookID, { __v : false});
    }

    async saveBook(newBook : BookDTO): Promise<Book>{
        const createdBook = new this.bookModel(newBook);
        return createdBook.save();
    }

    async deleteBookById(bookID : string) : Promise<Book>{
        return await this.bookModel.findOneAndDelete({_id: bookID});
    }

    async updateBookById(bookID: string, newBook: BookDTO) : Promise<Book> {
        return await this.bookModel.findOneAndUpdate({_id: bookID}, newBook);
    }

}