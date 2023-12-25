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

export { accordion };
