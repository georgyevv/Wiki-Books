import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BooksService } from "./books.service";
import { ConfirmationDialogComponent } from "./confirmation-dialog/confirmation-dialog.component";
import { MaterialModule } from "../material/material.module";

@NgModule({
    imports: [CommonModule, MaterialModule],
    declarations: [ConfirmationDialogComponent],
    entryComponents: [ConfirmationDialogComponent],
    exports: [ConfirmationDialogComponent],
    providers: [BooksService]
})
export class SharedModule {}
