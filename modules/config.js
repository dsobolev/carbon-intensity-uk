// To determine sequence of values
const fuels = [
    'gas',
    'nuclear',
    'wind',
    'solar',
    'other'
];

// Labels for the chart
const labels = fuels.map(item => item[0].toUpperCase() + item.slice(1));

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: [
            '#f3c677',
            '#b33f62',
            '#7b1e7a',
            '#f9564f',
            '#0c0a3e'
        ],
        data: [300, 50, 100, 20, 50],
        hoverOffset: 4
    }]
};

export const config = {
    chart: {
        type: 'pie',
        data: data,
        options: {}
    },
    baseUrl: 'https://api.carbonintensity.org.uk/regional/',
    fuelsSequence: fuels
};