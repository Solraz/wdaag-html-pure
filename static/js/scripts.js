import { navbar } from "./modules/navbar.js";
import {
	resize_all_masonry_items,
	masonry_interaction,
} from "./modules/masonry.js";
import { lazy_images } from "./modules/lazy_images.js";

window.addEventListener("load", () => {
	navbar();
	resize_all_masonry_items();
	lazy_images();
	masonry_interaction();
});

window.addEventListener("resize", () => {});
