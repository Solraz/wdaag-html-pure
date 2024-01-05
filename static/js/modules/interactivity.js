const parallax_scroll = (p) => {
	let multiplier = 0.25;
	if (p.classList.contains("more-parallax")) multiplier = 0.5;
	p.style.transform = `translate3d(0, -${window.scrollY * multiplier}px, 0)`;
};

const parallax = () => {
	let parallax = document.querySelectorAll(`.parallax`);

	for (const p of parallax) {
		parallax_scroll(p);
		document.addEventListener("scroll", parallax_scroll.bind(null, p));
	}
};

const accordion_open = (acc, accordion) => {
	for (const acc2 of accordion) {
		if (acc2 != acc) {
			acc2.classList.remove(`active`);
		}
	}

	acc.classList.contains("active")
		? acc.classList.remove(`active`)
		: acc.classList.add(`active`);
};

const accordion = () => {
	let accordion = document.querySelectorAll(`accordion-header`);

	for (const acc of accordion) {
		acc.addEventListener("click", accordion_open.bind(null, acc, accordion));
	}
};

export { accordion, parallax };
