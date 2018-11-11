import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BookAdmComponent } from "./book-adm/book-adm.component";
import { BooksAdmComponent } from "./books-adm/books-adm.component";
import { BooksAdmWrapperComponent } from "./books-adm-wrapper.component";

const routes: Routes = [
    {
        path: "",
        component: BooksAdmWrapperComponent,
        children: [
            {
                path: "",
                component: BooksAdmComponent
            },
            {
                path: ":id",
                component: BookAdmComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BooksAdmRoutingModule {}
