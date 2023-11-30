const resize_masonry_item = (item) => {
	let grid = document.querySelector(`masonry-vertical`);

	let rowGap = parseInt(
		window.getComputedStyle(grid).getPropertyValue("row-gap")
	);

	let rowSpan = Math.ceil(
		(item.querySelector("masonry-content > img").getBoundingClientRect()
			.height +
			rowGap) /
			rowGap
	);

	item.style.gridRowEnd = "span " + rowSpan;
};

const resize_all_masonry_items = () => {
	let all_masonry_bricks = document.querySelectorAll("masonry-brick");

	for (var i = 0; i < all_masonry_bricks.length; i++) {
		resize_masonry_item(all_masonry_bricks[i]);
	}
};

// const wait_for_images = () => {
// 	let all_masonry_bricks = document.querySelectorAll("masonry-brick");

// 	for (var i = 0; i < all_masonry_bricks.length; i++) {
// 	}
// };

export { resize_masonry_item, resize_all_masonry_items };
