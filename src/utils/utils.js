export const colors = [
    { value: "black_and_white", name: "Black and White" },
    { value: "black", name: "Black" },
    { value: "white", name: "White" },
    { value: "yellow", name: "Yellow" },
    { value: "orange", name: "Orange" },
    { value: "red", name: "Red" },
    { value: "purple", name: "Purple" },
    { value: "magenta", name: "Magenta" },
    { value: "green", name: "Green" },
    { value: "teal", name: "Teal" },
    { value: "blue", name: "Blue" },
]

export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};