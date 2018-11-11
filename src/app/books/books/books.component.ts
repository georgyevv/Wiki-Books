import { Component, OnInit } from "@angular/core";
import { BookModel } from "../../shared/book.model";
import { BooksService } from "src/app/shared/books.service";

@Component({
    selector: "app-books",
    templateUrl: "./books.component.html",
    styleUrls: ["./books.component.scss"]
})
export class BooksComponent implements OnInit {
    public books: BookModel[];

    constructor(private booksService: BooksService) {}

    async ngOnInit() {
        this.books = await this.booksService.getBooks();
    }
}
