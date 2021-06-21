import { func } from 'assert-plus';
import './sass/main.scss';
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


const buttons = {
    changeBackground: null,
    isActive: false,

    start() {
        if (this.isActive) {
            return;
        }
        
        this.isActive = true;

        this.changeBackground = setInterval(() => {
            const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
            document.body.style.background = randomColor;
        }, 1000);
    },

    stop() {
        this.isActive = false;
        clearInterval(this.changeBackground);
    
    },

}

refs.btnStart.addEventListener('click', buttons.start.bind(buttons));
refs.btnStop.addEventListener('click', buttons.stop.bind(buttons));


