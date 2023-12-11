import { navbar } from "./modules/navbar.js";
import { masonry_interaction } from "./modules/masonry.js";
import { lazy_images } from "./modules/lazy_images.js";
// import { sticky_text } from "./modules/interactivity.js";

window.addEventListener("load", () => {
	navbar();
	lazy_images();
	masonry_interaction();
	// sticky_text();

	htmx.on("htmx:load", () => {
		navbar();
		lazy_images();
		masonry_interaction();
		// sticky_text();
	});

	// let current_head = document.querySelector(`head`);
	// htmx.on("htmx:afterOnLoad", (e) => {
	// 	console.log(e);
	// let new_head = document.querySelector(`head`);

	// current_head.innerHTML = new_head.innerHTML;
	// });
});

window.addEventListener("resize", () => {});
