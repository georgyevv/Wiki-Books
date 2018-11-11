import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AuthorModel } from "src/app/shared/author.model";
import { AuthorsService } from "src/app/shared/authors.service";

@Component({
    selector: "app-author-adm",
    templateUrl: "./author-adm.component.html",
    styleUrls: ["./author-adm.component.scss"]
})
export class AuthorAdmComponent implements OnInit {
    public myControl = new FormControl();
    public author: AuthorModel;

    constructor(private route: ActivatedRoute, private authorsService: AuthorsService) {
        this.author = new AuthorModel();
    }

    public async ngOnInit() {
        const id = this.route.snapshot.params["id"];
        if (id) {
            this.author = await this.authorsService.getAuthor(id);
        }
    }
}
