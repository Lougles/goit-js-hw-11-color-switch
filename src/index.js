//1) Найти селекторы кнопок и боди
//2) Написать ф-цию которая при клике на кнопку старт меняет цвет из масива
//3) Написать ф-цию которая при клике на кнопку стоп останавливает изменение цвета

const refs = {
  startBtn: document.querySelector('[data-action=start]'),
  stopBtn: document.querySelector('[data-action=stop'),
  body: document.querySelector('body')
}
// function onStartClick(e) {
//   isActive: false,
//   console.log(e.target);
//   setInterval(() => {
//     refs.body.style.backgroundColor = colors[randomIntegerFromInterval(1, 6)];
//     console.log("qwer");
//   }, 1000);
// }
const switchColor = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
   this.intervalId = setInterval(() => {
      const randomColors = colors[randomIntegerFromInterval(1, 6)];
      refs.body.style.backgroundColor = randomColors;
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    this.intervalId = null;
    refs.body.style.backgroundColor = '#FFFFFF';
  }
};
refs.startBtn.addEventListener('click', switchColor.start.bind(switchColor));
refs.stopBtn.addEventListener('click', switchColor.stop.bind(switchColor));

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

