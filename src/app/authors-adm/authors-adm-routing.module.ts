import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthorsAdmWrapperComponent } from "./authors-adm-wrapper.component";
import { AuthorsAdmComponent } from "./authors-adm/authors-adm.component";
import { AuthorAdmComponent } from "./author-adm/author-adm.component";

const routes: Routes = [
    {
        path: "",
        component: AuthorsAdmWrapperComponent,
        children: [
            {
                path: "",
                component: AuthorsAdmComponent
            },
            {
                path: ":id",
                component: AuthorAdmComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorsAdmRoutingModule {}
