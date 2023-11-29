const lazy_images = () => {
	const lazy = document.querySelectorAll(".lazy");

	const intersection = new IntersectionObserver((entries, observer) => {
		for (let e of entries) {
			if (e.isIntersecting) {
				let image = e.target;

				image.src = image.dataset.src;
				image.classList.remove("lazy");

				intersection.unobserve(image);

				image.parentElement.querySelector(".skeleton").remove();
			}
		}
	});

	for (let img of lazy) {
		intersection.observe(img);
	}
};

export { lazy_images };
