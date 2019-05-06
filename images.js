const frame = document.getElementById("container");
const images = document.querySelectorAll('img');

function changeOpacity(event) {
	if (event.target.tagName == 'IMG') {
		for (let i = 0; i < images.length; i++) {
			images[i].className = 'semitransparent';
		}
		event.target.className = "opaque";
		event.target.addEventListener('mouseout', resetOpacity, false);
	}
	event.stopPropagation();
}

function resetOpacity() {
	for(let i = 0; i < images.length; i++) {
		images[i].className = 'opaque';
	}
}

frame.addEventListener('mouseover', changeOpacity, false);