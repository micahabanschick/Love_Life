class Expense {

    constructor(category, index, price=0) {
        this._category = category;
        this._index = index;
        this._price = price;
        // this._user = {};
    }
    
    get category() {
        return this._category;
    }

    get index() {
        return this._index;
    }

    get price() {
        return this._price;
    }

    // get user() {
    //     return this._user;
    // }

    set category(category) {
        this._category = category;
    }

    set index(index) {
        this._index = index;
    }

    set price(price) {
        this._price = price;
    }

    // set user(user) {
    //     this._user = user;
    // }

    add(user) {
        // this.user = user;
        user.expenses.unshift(this);
        user.monthlyIncome += this.price;
    }

    static overview(user) {
        return {
          necessities: {
            all: user.expenses.filter(expense => expense.category === "necessities"),
            total: user.expenses.filter(expense => expense.category === "necessities").map(expense => expense.price).reduce((tot, curr) => {tot + curr}, 0)
          },
          luxuries: {
            all: user.expenses.filter(expense => expense.category === "luxuries"),
            total: user.expenses.filter(expense => expense.category === "luxuries").map(expense => expense.price).reduce((tot, curr) => {tot + curr}, 0)
          },
          investments: {
            all: user.expenses.filter(expense => expense.category === "investments"),
            total: user.expenses.filter(expense => expense.category === "investments").map(expense => expense.price).reduce((tot, curr) => {tot + curr}, 0)
          }
        };
    }

    static addForm(item) {
        if (!item.querySelector('.expense-form')) {
            item.innerHTML += `
                <form class="expense-form" action="http://localhost:3000/users" method="post"> 
                    <input type="text" class="price" index="price" placeholder="Cost">
                    <input type="submit" value="Save">
                </form>
            `
        }
    }

    static removeForm(item) {
        let element = item.querySelector('.expense-form');
        if (!!element) {
            element.remove();
        }
    }

};