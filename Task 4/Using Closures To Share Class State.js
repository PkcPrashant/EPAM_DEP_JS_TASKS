var Cat = (function () {
    let quantity = 0, totalWeight = 0;

    let myCat = function (name, weight) {
        if (!name || !weight) {
            throw new Error("Either name or weight not defined");
        }

        totalWeight += weight;
        quantity++;

        Object.defineProperty(this, "name", {
            get: function () { return name },
            set: function (value) { name = value; }
        });

        Object.defineProperty(this, "weight", {
            get: function () { return weight },
            set: function (value) {
                totalWeight = totalWeight - weight + value;
                weight = value;
            }
        });
    };

    Object.defineProperty(myCat, "averageWeight", {
        value: function () {
            return totalWeight / quantity;
        }
    });
    return myCat;
}());