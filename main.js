import { config } from './modules/config.js';

console.log('Hi from module');

const myChart = new Chart(
    document.getElementById('chart-area'),
    config
);

console.log(myChart);