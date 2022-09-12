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
        label: 'Carbon Intencity in...',
        backgroundColor: [
            '#f3c677',
            '#b33f62',
            '#7b1e7a',
            '#f9564f',
            '#0c0a3e'
        ],
        data: [],
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
    fuelsSequence: fuels,

    chartElement: document.getElementById('chart-area'),

    updateDataValues: function (values) {
        this.chart.data.datasets.data = values;

        return this.chart;
    }
};