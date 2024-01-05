import { navbar, navbar_filter } from "./modules/navbar.js";
import { masonry_interaction } from "./modules/masonry.js";
import { lazy_images } from "./modules/lazy_images.js";
import { accordion, parallax } from "./modules/interactivity.js";

window.addEventListener("load", () => {
	// navbar();
	// navbar_filter();
	// lazy_images();
	// masonry_interaction();
	// let current_head = document.querySelector(`head`);
	// htmx.on("htmx:afterOnLoad", (e) => {
	// 	console.log(e);
	// let new_head = document.querySelector(`head`);
	// current_head.innerHTML = new_head.innerHTML;
	// });
});

htmx.on("htmx:load", () => {
	navbar();
	navbar_filter();
	lazy_images();
	masonry_interaction();
	accordion();
	parallax();
});

window.addEventListener("resize", () => {});
