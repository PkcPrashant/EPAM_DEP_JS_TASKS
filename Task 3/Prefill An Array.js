function prefill(length, value) {
    if (isNaN(parseInt(length)) || length < 0 || length % 1 !== 0) {
        throw new TypeError(length + ' is invalid');
    } else if (length === 0 || length === '0') {
        return [];
    } else {
        return new Array(length).fill(value);
    }
}
