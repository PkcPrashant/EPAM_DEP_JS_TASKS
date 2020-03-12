function cache(func) {
    var cache = {};
    return function (...args) {
        let myCache = JSON.stringify(args);

        if (!cache.hasOwnProperty(myCache)) {
            cache[myCache] = func(...args);
        }
        return cache[myCache];
    }
}