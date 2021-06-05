
exports.setOffScreenLeft = (el) => {
	let area = el.getBoundingClientRect();
	return -(window.innerWidth/2 + area.left);
}

exports.setOffScreenRight = (el) => {
	let area = el.getBoundingClientRect();
	return window.innerWidth/2 + area.right;
}

exports.setOffScreenTop = (el) => {
	let area = el.getBoundingClientRect();
	return -(window.innerHeight + area.top);
}

exports.setOffScreenBottom = (el) => {
	let area = el.getBoundingClientRect();
	return window.innerHeight + area.bottom;
}

