import { Component, OnInit } from "@angular/core";
import { BookModel } from "../../shared/book.model";
import { Router, ActivatedRoute } from "@angular/router";
import { BooksService } from "src/app/shared/books.service";

@Component({
    selector: "book",
    templateUrl: "./book.component.html",
    styleUrls: ["./book.component.scss"]
})
export class BookComponent implements OnInit {
    public selectedOption: string;
    public book: BookModel;

    constructor(
        private route: ActivatedRoute,
        private booksService: BooksService
    ) {
        this.book = new BookModel();
        this.selectedOption = "description";
    }

    async ngOnInit() {
        let id = this.route.snapshot.params["id"];
        this.book = await this.booksService.getBook(id);
    }
}
