import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Book } from "./schema/book.schema";
import { BookService } from "./book.service";
import { AddBookArgs } from "./args/add-book.args";
import { UpdateBookArgs } from "./args/update-book.args";


@Resolver(of => Book)   //of => schemaName  ----> telling, which schema to refer?
export class BookResolver{

    constructor(private readonly bookService: BookService){}

    @Query(returns => [Book], {name: 'allBooks'})
    getAllBooks(){
        return this.bookService.findAllBooks()
    }

    @Query(returns => Book, {name: 'book'})
    getBookById(@Args({name: 'bookId', type: () => Int}) id: number){
        return this.bookService.findBookById(id)
    }

    @Mutation(returns => String, {name: 'addBook'})
    addBook(@Args('addBookArgs') addBookArgs: AddBookArgs){
        return this.bookService.addBook(addBookArgs)
    }

    @Mutation(returns => String, {name: 'deleteBook'})
    deleteBook(@Args({name: 'bookId', type: () => Int}) id: number){
        return this.bookService.deleteBookById(id)
    }

    @Mutation(returns => String, {name: 'updateBook'})
    updateBook(@Args('updateBookArgs') updateBookArgs: UpdateBookArgs){
        return this.bookService.updateBook(updateBookArgs)
    }
} 