import { navbar } from "./modules/navbar.js";
import {
	resize_all_masonry_items,
	masonry_interaction,
} from "./modules/masonry.js";
import { lazy_images } from "./modules/lazy_images.js";

window.addEventListener("load", () => {
	navbar();
	lazy_images();
	masonry_interaction();

	htmx.onLoad(() => {
		navbar();
		lazy_images();
		masonry_interaction();
	});
});

window.addEventListener("resize", () => {});
