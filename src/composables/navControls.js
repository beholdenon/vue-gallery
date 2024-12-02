export function openNav() {
	document.body.classList.add("nav-active");
}

export function closeNav() {
	document.body.classList.add("nav-close");
	document.body.classList.remove("nav-active");
	setTimeout(() => document.body.classList.remove("nav-close"), 1000);
}

export default { openNav, closeNav };