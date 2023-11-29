import { navbar } from "./modules/navbar.js";
import { resize_all_masonry_items } from "./modules/masonry.js";

window.addEventListener("load", () => {
	navbar();
	resize_all_masonry_items();
});

window.addEventListener("resize", () => {});
