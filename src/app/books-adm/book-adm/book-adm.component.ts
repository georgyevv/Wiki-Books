import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AuthorsService } from "src/app/shared/authors.service";
import { BookModel } from "src/app/shared/book.model";
import { BooksService } from "src/app/shared/books.service";

@Component({
    selector: "app-book-adm",
    templateUrl: "./book-adm.component.html",
    styleUrls: ["./book-adm.component.scss"]
})
export class BookAdmComponent implements OnInit {
    public book: BookModel;
    public coverTypes: any[];
    public authors: any[];
    public myControl = new FormControl();

    constructor(private route: ActivatedRoute, private booksService: BooksService, private authorsService: AuthorsService) {
        this.book = new BookModel();
        this.authors = [];
        this.coverTypes = ["Hardcover", "Paperback", "Audiobook", "Kindle", "Mass Market Paperback", "Audio CD", "Unknown Binding"];
    }

    public async ngOnInit() {
        this.authors = await this.authorsService.getAuthors();

        const id = this.route.snapshot.params["id"];
        if (id) {
            this.book = await this.booksService.getBook(id);
        }
    }
}
