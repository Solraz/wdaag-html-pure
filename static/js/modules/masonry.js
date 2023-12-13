const resize_masonry_item = (item) => {
	let masonry = document.querySelector(`masonry-vertical`);

	let row_gap = parseInt(
		window.getComputedStyle(masonry).getPropertyValue("row-gap")
	);
	let row_height = parseInt(
		window.getComputedStyle(masonry).getPropertyValue("grid-template-rows")
	);

	let row_span = Math.ceil(
		(item.querySelector("masonry-content > img").getBoundingClientRect()
			.height +
			row_gap) /
			(row_gap + row_height)
	);

	item.style.gridRowEnd = "span " + row_span;
};

const resize_all_masonry_items = () => {
	let all_masonry_bricks = document.querySelectorAll("masonry-brick");

	for (var i = 0; i < all_masonry_bricks.length; i++) {
		resize_masonry_item(all_masonry_bricks[i]);
	}
};

const masonry_bricks_enter = (brick) => {
	brick.classList.add("active");
};
const masonry_bricks_leave = (brick) => {
	brick.classList.remove("active");
};
const masonry_bricks_click = (m) => {
	m.classList.toggle("active");
};

const masonry_bricks = (bricks) => {
	for (const m of bricks) {
		m.addEventListener("mouseenter", masonry_bricks_enter.bind(null, m));
		m.addEventListener("click", masonry_bricks_click.bind(null, m));
		m.addEventListener("mouseleave", masonry_bricks_leave.bind(null, m));
	}
};
const masonry_interaction = () => {
	let masonry = document.querySelector(`masonry-vertical`);
	if (!masonry) return;

	let bricks = masonry.querySelectorAll(`masonry-content`);

	masonry_bricks(bricks);
};

export { resize_masonry_item, resize_all_masonry_items, masonry_interaction };
