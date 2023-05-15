"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const book_entity_1 = require("./entity/book.entity");
const typeorm_2 = require("@nestjs/typeorm");
let BookService = class BookService {
    constructor(bookRepo) {
        this.bookRepo = bookRepo;
    }
    async findAllBooks() {
        const books = await this.bookRepo.find();
        return books;
    }
    async findBookById(id) {
        const book = await this.bookRepo.findOne({ where: { id: id } });
        if (!book) {
            throw new common_1.NotFoundException('Book Not Found!');
        }
        return book;
    }
    async deleteBookById(id) {
        await this.bookRepo.delete(id);
        return `Deleted book with id: ${id}`;
    }
    async addBook(addBookArgs) {
        const book = new book_entity_1.BookEntity();
        book.title = addBookArgs.title;
        book.price = addBookArgs.price;
        await this.bookRepo.save(book);
        return `Book added successfull with title: ${addBookArgs.title}`;
    }
    async updateBook(updateBookArgs) {
        const book = await this.bookRepo.findOne({ where: { id: updateBookArgs.id } });
        book.title = updateBookArgs.title;
        book.price = updateBookArgs.price;
        await this.bookRepo.save(book);
        return `Book updated successfull with title: ${updateBookArgs.title}`;
    }
};
BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(book_entity_1.BookEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map