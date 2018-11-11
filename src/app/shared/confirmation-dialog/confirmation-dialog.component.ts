import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
    selector: "app-confirmation-dialog",
    templateUrl: "./confirmation-dialog.component.html",
    styleUrls: ["./confirmation-dialog.component.scss"]
})
export class ConfirmationDialogComponent {
    constructor(public dialogRef: MatDialogRef<ConfirmationDialogComponent>) {}

    public onNoClick(): void {
        this.dialogRef.close();
    }
}
