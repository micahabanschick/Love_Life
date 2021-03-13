class Expense {

    constructor(name, price, category) {
        this._name = name;
        this._price = price;
        this._category = category;
    }

    get name() {
        return this._name;
    }

    get price() {
        return this._price;
    }

    get category() {
        return this._category;
    }

    set name(name) {
        this._name = name;
    }

    set price(price) {
        this._price = price;
    }

    set category(category) {
        this._category = category;
    }

};