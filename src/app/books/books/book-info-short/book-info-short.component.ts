import { Component, Input } from "@angular/core";
import { BookModel } from "../../../shared/book.model";

@Component({
    selector: "book-info-short",
    templateUrl: "./book-info-short.component.html",
    styleUrls: ["./book-info-short.component.scss"]
})
export class BookInfoShortComponent {
    @Input()
    book: BookModel;
}
