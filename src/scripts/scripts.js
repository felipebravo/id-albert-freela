const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel__inner');
const prevBtn = document.querySelector('.carousel__prev');
const nextBtn = document.querySelector('.carousel__next');
const items = document.querySelectorAll('.carousel__item');
const itemWidth = items[0].clientWidth;

let currentIndex = 2;

function showCurrentItem() {
	items.forEach((item) => item.classList.remove('active'));
	items[currentIndex].classList.add('active');
}

function slide(direction) {
	if (direction === 'next' && currentIndex < items.length - 1) {
		currentIndex++;
	} else if (direction === 'next' && currentIndex === items.length - 1) {
		currentIndex = 0;
	}

	if (direction === 'prev' && currentIndex > 0) {
		currentIndex--;
	} else if (direction === 'prev' && currentIndex === 0) {
		currentIndex = items.length - 1;
	}

	showCurrentItem();
}

function handleMouseover() {
	items.forEach((item, index) => {
		if (item === this) {
			currentIndex = index;
			showCurrentItem();
		}
	});
}

items.forEach((item) => item.addEventListener('mouseover', handleMouseover));

prevBtn.addEventListener('click', (evt) => {
	evt.preventDefault();

	slide('prev');
});

nextBtn.addEventListener('click', (evt) => {
	evt.preventDefault();

	slide('next');
});
