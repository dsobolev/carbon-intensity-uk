const labels = [
    'Gas',
    'Nuclear',
    'Wind',
    'Solar',
    'Others'
];

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
    type: 'pie',
    data: data,
    options: {}
};