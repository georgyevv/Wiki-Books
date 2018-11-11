import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthorsAdmRoutingModule } from "./authors-adm-routing.module";
import { AuthorsAdmComponent } from "./authors-adm/authors-adm.component";
import { MaterialModule } from "../material/material.module";
import { AuthorsAdmWrapperComponent } from "./authors-adm-wrapper.component";
import { AuthorAdmComponent } from "./author-adm/author-adm.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, AuthorsAdmRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule],
    declarations: [AuthorsAdmComponent, AuthorsAdmWrapperComponent, AuthorAdmComponent],
    exports: [AuthorsAdmComponent]
})
export class AuthorsAdmModule {}
