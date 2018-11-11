import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material/material.module";
import { SharedModule } from "../shared/shared.module";
import { BookAdmComponent } from "./book-adm/book-adm.component";
import { BooksAdmRoutingModule } from "./books-adm-routing.module";
import { BooksAdmWrapperComponent } from "./books-adm-wrapper.component";
import { BooksAdmComponent } from "./books-adm/books-adm.component";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule, RouterModule, BooksAdmRoutingModule, SharedModule],
    declarations: [BooksAdmComponent, BookAdmComponent, BooksAdmWrapperComponent],
    exports: [BooksAdmComponent]
})
export class BooksAdmModule {}
