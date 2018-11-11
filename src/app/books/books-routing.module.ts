import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BooksComponent } from "./books/books.component";
import { BooksWrapperComponent } from "./books-wrapper.component";
import { BookComponent } from "./book/book.component";

const routes: Routes = [
    {
        path: "",
        component: BooksWrapperComponent,
        data: {
            breadcrumb: "Books"
        },
        children: [
            {
                path: "",
                component: BooksComponent,
                data: {
                    breadcrumb: "Books"
                }
            },
            {
                path: ":id",
                component: BookComponent,
                data: {
                    breadcrumb: ""
                }
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BooksRoutingModule {}
