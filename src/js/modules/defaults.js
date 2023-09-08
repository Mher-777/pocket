var defaults = {

	events: () => {
		document.addEventListener("mousemove", parallax);
		function parallax(event) {
			this.querySelectorAll(".header__image").forEach((shift) => {
				const x = (window.innerWidth - event.pageX * 3) / 90;
				const y = (window.innerHeight - event.pageY * 3) / 90;

				shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
			});
		}
	},

	init: () => {

		defaults.events();

	}
}

export { defaults }