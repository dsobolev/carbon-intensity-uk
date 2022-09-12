export function formUrl(base, param) {
    let parameter = param.toLowerCase();
    if ('london' === parameter) {
        parameter = 13;
    }

    return base + parameter;
}

/*
 * @param sequence [Array] - list where labels are placed in a desired order
 * @param data [Array] - data from an API endpoint, list of objects:
 *    [
 *        {fuel: 'gas', perc: 6.2},
 *        {fuel: 'coal', perc: 0.2},
 *        ...
 *    ]
 *
 * @return [Array] Carbon intencity ('perc') for fuels in the right 'sequence' order
 */
export function buildChartDataValues(sequence, data) {
    let result = Array(sequence.length).fill(0);

    for (let item of data) {
        let fuelIndex = sequence.indexOf(item.fuel);

        // Fuels not trackable by 'sequence' considered as 'other'
        if (-1 === fuelIndex) {
            fuelIndex = sequence.indexOf('other');
        }
        result[ fuelIndex ] += item.perc;
    }

    return result;
}

/* Inits (draws) a pie chart
 *
 * @param element [HTMLElement] Element to display chart in
 * @param chartData [Object] Configuration data for a chart
 */
export function initChart(element, chartData) {
    return new Chart(element, chartData);
}

/* Redraws a pie chart
 *
 * @param chart [Chart] Chart object element
 * @param values [Array] Values to be displayed in the chart
 */
export function redrawChart(chart, values) {
    chart.data.datasets[0].data = values;
    chart.update();
}