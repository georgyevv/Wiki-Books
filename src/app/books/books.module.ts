import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BooksRoutingModule } from "./books-routing.module";
import { BooksComponent } from "./books/books.component";
import { BooksWrapperComponent } from "./books-wrapper.component";
import { MaterialModule } from "../material/material.module";
import { BookInfoShortComponent } from "./books/book-info-short/book-info-short.component";
import { BookInfoLongComponent } from "./books/book-info-long/book-info-long.component";
import { BookComponent } from './book/book.component';

@NgModule({
    imports: [CommonModule, BooksRoutingModule, MaterialModule],
    declarations: [
        BooksComponent,
        BooksWrapperComponent,
        BookInfoShortComponent,
        BookInfoLongComponent,
        BookComponent
    ]
})
export class BooksModule {}
