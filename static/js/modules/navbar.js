const open = () => {
	let navbar = document.querySelector(`nav`);
	let oob_nav = document.querySelector(`oob-nav`);

	navbar.classList.add(`navigation`);
	oob_nav.classList.add(`navigation`);
};

const close = () => {
	let navbar = document.querySelector(`nav`);
	let oob_nav = document.querySelector(`oob-nav`);

	navbar.classList.remove(`navigation`);
	oob_nav.classList.remove(`navigation`);
};

const close_with_delay = () => {
	let navbar = document.querySelector(`nav`);
	let oob_nav = document.querySelector(`oob-nav`);

	window.timeout_for_close = null;
	window.timeout_for_close = setTimeout(() => {
		navbar.classList.remove(`navigation`);
		oob_nav.classList.remove(`navigation`);
	}, 250);
};

const navbar_background = (nav) => {
	if (window.scrollY >= 100 && !nav.classList.contains(`moving`)) {
		nav.classList.add(`moving`);
	} else if (window.scrollY < 100 && nav.classList.contains(`moving`)) {
		nav.classList.remove(`moving`);
	}
};

const navbar = () => {
	let nav = document.querySelector(`nav`);
	let opener = nav.querySelector(`.opener`);
	let closer = nav.querySelector(`closer`);
	let links = document.querySelector(`oob-nav`).querySelectorAll(`a`);

	opener.addEventListener("click", open);
	closer.addEventListener("click", close);

	for (const e of links) {
		e.addEventListener("click", close_with_delay);
	}

	navbar_background(nav);
	document.addEventListener("scroll", (e) => {
		navbar_background(nav);
	});
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
