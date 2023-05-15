import { BookService } from "./book.service";
import { AddBookArgs } from "./args/add-book.args";
import { UpdateBookArgs } from "./args/update-book.args";
export declare class BookResolver {
    private readonly bookService;
    constructor(bookService: BookService);
    getAllBooks(): Promise<import("./entity/book.entity").BookEntity[]>;
    getBookById(id: number): Promise<import("./entity/book.entity").BookEntity>;
    addBook(addBookArgs: AddBookArgs): Promise<string>;
    deleteBook(id: number): Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): Promise<string>;
}
