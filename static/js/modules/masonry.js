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

const masonry_interaction = () => {
	let masonry = document.querySelector(`masonry-vertical`),
		masonry_bricks = masonry.querySelectorAll(`masonry-content`);

	masonry.addEventListener("mouseleave", () => {
		for (const m of masonry_bricks) {
			m.addEventListener("mouseleave", () => {
				m.classList.remove("active");
			});
		}
	});

	for (const m of masonry_bricks) {
		m.addEventListener("mouseenter", () => {
			m.classList.add("active");
		});

		m.addEventListener("mouseleave", () => {
			m.classList.remove("active");
		});
	}
};

export { resize_masonry_item, resize_all_masonry_items, masonry_interaction };
