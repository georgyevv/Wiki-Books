import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        BreadcrumbComponent
    ],
    declarations: [
        HeaderComponent,
        FooterComponent,
        BreadcrumbComponent
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
