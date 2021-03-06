import { Injectable } from "@angular/core";
import { getCookie, setCookie } from "typescript-cookie";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private route: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): boolean {
		const token = getCookie("token")
		if (token) {
			return true;
		} else {
			this.route.navigate(["login"]);
			return false;
		}
	}
}
