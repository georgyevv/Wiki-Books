import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    {
        path: "home",
        loadChildren: "./home/home.module#HomeModule",
        data: {
            breadcrumb: "Home"
        }
    },
    {
        path: "books",
        loadChildren: "./books/books.module#BooksModule",
        data: {
            breadcrumb: "Books"
        }
    },
    {
        path: "administration/books",
        loadChildren: "./books-adm/books-adm.module#BooksAdmModule"
    },
    {
        path: "administration/authors",
        loadChildren: "./authors-adm/authors-adm.module#AuthorsAdmModule"
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
