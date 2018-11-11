import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { BreadCrumb } from "./breadcrumb";
import { filter, distinctUntilChanged, map } from "rxjs/operators";

@Component({
    selector: "navigation-breadcrumb",
    templateUrl: "./breadcrumb.component.html",
    styleUrls: ["./breadcrumb.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
    name: string;
    menu: Array<any> = [];
    breadcrumbList: Array<any> = [];

    constructor(private _router: Router) {}

    ngOnInit() {
        this.listenRouting();
    }

    listenRouting() {
        let routerUrl: string, routerList: Array<any>, target: any;
        this._router.events.subscribe((router: any) => {
            debugger;
            routerUrl = router.urlAfterRedirects;
            if (routerUrl && typeof routerUrl === "string") {
                target = this.menu;
                this.breadcrumbList.length = 0;
                routerList = routerUrl.slice(1).split("/");
                routerList.forEach((router, index) => {
                    target = target.find(page => page.path.slice(2) === router);
                    this.breadcrumbList.push({
                        name: target.name,
                        path: index === 0 ? target.path : `${this.breadcrumbList[index - 1].path}/${target.path.slice(2)}`
                    });

                    if (index + 1 !== routerList.length) {
                        target = target.children;
                    }
                });

                console.log(this.breadcrumbList);
            }
        });
    }
}
