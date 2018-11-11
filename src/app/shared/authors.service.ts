import { Injectable } from "@angular/core";
import { AuthorModel } from "./author.model";

@Injectable({
    providedIn: "root"
})
export class AuthorsService {
    private authors: AuthorModel[] = [new AuthorModel("1", "J. K. Rowling")];

    public getAuthor(id: string): Promise<AuthorModel> {
        return new Promise((resolve, reject) => {
            let author = this.authors.filter(b => b.id == id)[0];
            resolve(author);
        });
    }

    public getAuthors(): Promise<AuthorModel[]> {
        return new Promise((resolve, reject) => {
            resolve(this.authors);
        });
    }
}
