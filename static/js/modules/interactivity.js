const accordion = () => {
	let accordion = document.querySelectorAll(`accordion-header`);

	for (const acc of accordion) {
		acc.addEventListener("click", () => {
			for (const acc2 of accordion) {
				if (acc2 != acc) {
					acc2.classList.remove(`active`);
				}
			}

			acc.classList.toggle(`active`);
		});
	}
};

export { accordion };
