const plus = document.querySelector('.plus');
const plus1 = document.querySelector('.plus1');
const plus2 = document.querySelector('.plus2');
const plus3 = document.querySelector('.plus3');
const plus4 = document.querySelector('.plus4');

const show = document.querySelector('.show');
const content = document.querySelector('.para');
const content1 = document.querySelector('.para1');
const content2 = document.querySelector('.para2');
const content3 = document.querySelector('.para3');
const content4 = document.querySelector('.para4');


plus.addEventListener("click", function () {
	content.classList.toggle('show')
});
plus1.addEventListener("click", function () {
	content1.classList.toggle('show')
});
plus2.addEventListener("click", function () {
	content2.classList.toggle('show')
});
plus3.addEventListener("click", function () {
	content3.classList.toggle('show')
});
plus4.addEventListener("click", function () {
	content4.classList.toggle('show')
})