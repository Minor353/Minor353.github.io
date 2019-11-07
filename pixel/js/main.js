const templateArea = document.querySelectorAll(`template`);
const mainBlock = document.querySelector(`#main`);
const body = document.querySelector(`body`);
let counter = 0;

body.insertAdjacentHTML(`beforeend`, `<div class="arrows__wrap">
<style>
  .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
  }
  .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
    cursor: pointer;
  }
</style>
<button class="arrows__btn arrows__btn--prev"><-</button>
<button class="arrows__btn arrows__btn--next">-></button>
</div>
`);

const templateShow = (num) => {
  mainBlock.innerHTML = templateArea[num - 1].innerHTML;
};


document.addEventListener(`keydown`, (event) => {
  if (event.code === `ArrowRight` && counter < 6) {
    counter += 1;
    templateShow(counter);
  } else if (event.code === `ArrowLeft` && counter > 1) {
    counter -= 1;
    templateShow(counter);
  }
});

const arrowPrev = document.querySelector(`.arrows__btn--prev`);
const arrowNext = document.querySelector(`.arrows__btn--next`);

arrowNext.addEventListener(`click`, () => {
  if (counter < 6) {
    counter += 1;
    templateShow(counter);
  }
});

arrowPrev.addEventListener(`click`, () => {
  if (counter > 1) {
    counter -= 1;
    templateShow(counter);
  }
});
