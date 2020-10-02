function rand(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
}

const word = document.getElementById('title-word');
const dict = ['Meeting', 'Konferenz', 'Schulung', 'Barcamp', 'Summit', 'Tagung', 'Vortrag'];
let i = 0;

const swap = function() {
	i++;
	if (i >= dict.length) i = 0;
	word.innerHTML = dict[i];
	setTimeout(swap, rand(1500, 3500));
};

setTimeout(swap, rand(1500, 3500));
