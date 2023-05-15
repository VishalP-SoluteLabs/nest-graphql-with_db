export interface AddBookArgs {
    title: string;
    price: number;
}
export interface UpdateBookArgs {
    id: number;
    title: string;
    price: number;
}
export interface Book {
    id: number;
    title: string;
    price: number;
}
export interface IQuery {
    index(): string | Promise<string>;
    allBooks(): Book[] | Promise<Book[]>;
    book(bookId: number): Book | Promise<Book>;
}
export interface IMutation {
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    deleteBook(bookId: number): string | Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): string | Promise<string>;
}
