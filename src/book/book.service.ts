import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { BookEntity } from "./entity/book.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { AddBookArgs } from "./args/add-book.args";
import { UpdateBookArgs } from "./args/update-book.args";


@Injectable()
export class BookService{
 
    constructor(@InjectRepository(BookEntity) public readonly bookRepo: Repository<BookEntity>){}

    
    async findAllBooks(): Promise<BookEntity[]> {  //Since the function is async, so return type should be written in Promise<return type>
        const books = await this.bookRepo.find()

        return books;
    }

    async findBookById(id: number): Promise<BookEntity> {
        const book = await this.bookRepo.findOne({where: {id: id}});
        if(!book){
            throw new NotFoundException('Book Not Found!')
        }
        return book;
    }

    async deleteBookById(id: number): Promise<string> {
        await this.bookRepo.delete(id);

        return `Deleted book with id: ${id}`;
    }

    async addBook(addBookArgs: AddBookArgs): Promise<string>{
        const book: BookEntity = new BookEntity();

        book.title = addBookArgs.title;
        book.price = addBookArgs.price;
        await this.bookRepo.save(book)

        return `Book added successfull with title: ${addBookArgs.title}`
    }


    async updateBook(updateBookArgs: UpdateBookArgs): Promise<string>{
        const book: BookEntity   = await this.bookRepo.findOne({where: {id : updateBookArgs.id}})
      
        book.title = updateBookArgs.title;
        book.price = updateBookArgs.price;
        await this.bookRepo.save(book)

        return `Book updated successfull with title: ${updateBookArgs.title}`
    }

}