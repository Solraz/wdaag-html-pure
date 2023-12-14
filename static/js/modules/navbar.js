const open = () => {
	let main = document.querySelector(`main`);
	let navbar = document.querySelector(`nav`);

	let top = window.scrollY;
	// main.style.top = `-${top}px`;
	main.classList.toggle(`navigation`);
};

const navbar = () => {
	let nav = document.querySelector(`nav`);
	let opener = nav.querySelector(`.opener`);

	opener.addEventListener("click", open);
};

const navbar_filter = () => {
	let location = window.location.href;
	let links = document.querySelectorAll(`oob-nav a`);

	for (const l of links) {
		if (l.attributes["hx-post"] === location) {
			l.attributes["hx-post"].value = "";
			l.attributes["hx-target"].value = "";
			l.attributes["hx-trigger"].value = "";
		}
	}
};

export { navbar, navbar_filter };
