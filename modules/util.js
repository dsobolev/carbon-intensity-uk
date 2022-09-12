export function formUrl(base, param) {
    let parameter = param.toLowerCase();
    if ('london' === parameter) {
        parameter = 13;
    }

    return base + parameter;
}