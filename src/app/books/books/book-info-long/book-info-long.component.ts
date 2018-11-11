import { Component, Input } from "@angular/core";
import { BookModel } from "../../../shared/book.model";

@Component({
    selector: "book-info-long",
    templateUrl: "./book-info-long.component.html",
    styleUrls: ["./book-info-long.component.scss"]
})
export class BookInfoLongComponent {
    @Input()
    book: BookModel;
}
