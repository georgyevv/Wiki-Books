import { Component, OnInit } from "@angular/core";
import { AuthorModel } from "src/app/shared/author.model";
import { AuthorsService } from "src/app/shared/authors.service";

@Component({
    selector: "app-authors-adm",
    templateUrl: "./authors-adm.component.html",
    styleUrls: ["./authors-adm.component.scss"]
})
export class AuthorsAdmComponent implements OnInit {
    public displayedColumns: string[] = ["actions", "title"];
    public authors: AuthorModel[];

    constructor(private authorsService: AuthorsService) {}

    async ngOnInit() {
        this.authors = await this.authorsService.getAuthors();
    }
}
