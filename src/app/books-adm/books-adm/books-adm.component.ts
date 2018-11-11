import { Component, OnInit } from "@angular/core";
import { BooksService } from "src/app/shared/books.service";
import { BookModel } from "src/app/shared/book.model";
import { MatDialog } from "@angular/material";
import { ConfirmationDialogComponent } from "src/app/shared/confirmation-dialog/confirmation-dialog.component";

@Component({
    selector: "app-books-adm",
    templateUrl: "./books-adm.component.html",
    styleUrls: ["./books-adm.component.scss"]
})
export class BooksAdmComponent implements OnInit {
    public displayedColumns: string[] = ["actions", "title", "authors", "genre", "coverType", "publishDate", "price"];
    public books: BookModel[];

    constructor(public dialog: MatDialog, private booksService: BooksService) {}

    public async ngOnInit() {
        this.books = await this.booksService.getBooks();
    }

    public confirmDelete(id) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.delete(id);
            }
        });
    }

    private delete(id) {
        alert("deleting " + id);
    }
}
