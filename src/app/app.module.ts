import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserAnimationsModule, BrowserModule, CommonModule, AppRoutingModule, CoreModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
