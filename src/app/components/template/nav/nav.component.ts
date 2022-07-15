import { LoaderService } from './../../loader.service';
import { Router } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { getCookie, removeCookie } from "typescript-cookie";
@Component({
	selector: "app-nav",
	templateUrl: "./nav.component.html",
	styleUrls: ["./nav.component.scss"],
})
export class NavComponent implements OnInit {
	constructor (
		private route: Router,
		public load: LoaderService
	) { }


	opened = false;
	click = true;

	ngOnInit(): void {
		window.addEventListener('scroll', () => {
			this.opened = false
		});
		let nav = document.getElementsByClassName(
			"sidenav"
		) as HTMLCollectionOf<HTMLElement>;
		if (nav.length != 0) {
			nav[0].style.marginTop = "5rem";
		}
		window.document.addEventListener('DOMContentLoaded', () => {
			const html = document.querySelector('html')

			if (this.click === false) {
				this.click = false
				html!.setAttribute("dark", "true")
				localStorage.setItem('dark-mode', "true")
			} else {
				this.click = true
				html!.removeAttribute("dark")
				localStorage.removeItem('dark-mode')
			}
		})
}

changeStyle(){
	const html = document.querySelector('html')
	if (this.click === true) {
		this.click = true
		html!.setAttribute("dark", "true")
		localStorage.setItem('dark-mode', "true")
	} else {
		this.click = false
		html!.removeAttribute("dark")
		localStorage.removeItem('dark-mode')
	}
}

outOrIn(): any {
	return new Promise((resolve) => {
		const cookie = getCookie("token")
		if (cookie != null) {
			removeCookie("token")
			this.route.navigate(["/login"])
			window.location.reload
		}
		resolve(true)
	});
}
}
