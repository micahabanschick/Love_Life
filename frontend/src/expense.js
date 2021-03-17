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

    add(user) {
        return user.expenses.unshift(this);
    }

    static addForm(item) {
        if (!item.querySelector('.expense-form')) {
            item.innerHTML += `
                <form class="expense-form" action="http://localhost:3000/users" method="post"> 
                    <input type="text" class="expense" name="expense" placeholder="Cost">
                    <input type="submit" value="Save">
                </form>
            `
        }
    }

    static removeForm(item) {
        let element = item.querySelector('.expense-form');
        element.remove();
    }

};