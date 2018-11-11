import { Injectable } from "@angular/core";
import { BookModel } from "./book.model";

@Injectable({
    providedIn: "root"
})
export class BooksService {
    private books: BookModel[] = [
        new BookModel(
            "Harry Potter And The Chamber Of Secrets",
            'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.',
            ["J. K. Rowling"],
            "Bloomsbury",
            new Date(1998, 6, 2),
            "English",
            251,
            "Fantasy",
            17.7,
            "https://images-na.ssl-images-amazon.com/images/I/51OZerWcGCL.jpg",
            "10",
            "9789547714045",
            "Paperback"
        ),
        new BookModel(
            "Harry Potter And The Chamber Of Secrets",
            'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.',
            ["J. K. Rowling"],
            "Bloomsbury",
            new Date(1998, 6, 2),
            "English",
            251,
            "Fantasy",
            17.7,
            "https://images-na.ssl-images-amazon.com/images/I/51OZerWcGCL.jpg",
            "20",
            "9789547714045",
            "Paperback"
        ),
        new BookModel(
            "Harry Potter And The Chamber Of Secrets",
            'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.',
            ["J. K. Rowling"],
            "Bloomsbury",
            new Date(1998, 6, 2),
            "English",
            251,
            "Fantasy",
            17.7,
            "https://images-na.ssl-images-amazon.com/images/I/51OZerWcGCL.jpg",
            "30",
            "9789547714045",
            "Paperback"
        ),
        new BookModel(
            "Harry Potter And The Chamber Of Secrets",
            'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.',
            ["J. K. Rowling"],
            "Bloomsbury",
            new Date(1998, 6, 2),
            "English",
            251,
            "Fantasy",
            17.7,
            "https://images-na.ssl-images-amazon.com/images/I/51OZerWcGCL.jpg",
            "40",
            "9789547714045",
            "Paperback"
        ),
        new BookModel(
            "Harry Potter And The Chamber Of Secrets",
            'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families. These threats are found after attacks which leave residents of the school petrified. Throughout the year, Harry and his friends Ron and Hermione investigate the attacks.',
            ["J. K. Rowling"],
            "Bloomsbury",
            new Date(1998, 6, 2),
            "English",
            251,
            "Fantasy",
            17.7,
            "https://images-na.ssl-images-amazon.com/images/I/51OZerWcGCL.jpg",
            "50",
            "9789547714045",
            "Paperback"
        )
    ];

    constructor() {}

    public getBook(id: string): Promise<BookModel> {
        return new Promise((resolve, reject) => {
            let book = this.books.filter(b => b.id == id)[0];
            resolve(book);
        });
    }

    public getBooks(): Promise<BookModel[]> {
        return new Promise((resolve, reject) => {
            resolve(this.books);
        });
    }
}
