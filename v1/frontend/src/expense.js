class Expense {

    constructor(category, index, price=0) {
        this._category = category;
        this._index = index;
        this._price = price;
        this._userID = -1;
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

    get userID() {
        return this._userID;
    }

    set category(category) {
        this._category = category;
    }

    set index(index) {
        this._index = index;
    }

    set price(price) {
        this._price = price;
    }

    set userID(id) {
        this._userID = id;
    }

    add(user) {
        this.userID = user.id;
        // user.expenses.unshift(this);
        if(this.category === "necessities") {
            user.totalNecessities += this.price
        } else if(this.category === "luxuries") {
            user.totalLuxuries += this.price
        } else if (this.category === "investments") {
            user.totalInvestments += this.price
        }
        user.monthlyIncome += this.price;
    }

    static overview(user) {
        return {
          necessities: {
            all: user.categorizedBy(),
            total: user.sumOfCategory()
          },
          luxuries: {
            all: user.expenses().filter(expense => expense.category === "luxuries"),
            total: user.expenses().filter(expense => expense.category === "luxuries").map(expense => expense.price).reduce((tot, curr) => {tot + curr}, 0)
          },
          investments: {
            all: user.expenses().filter(expense => expense.category === "investments"),
            total: user.expenses().filter(expense => expense.category === "investments").map(expense => expense.price).reduce((tot, curr) => {tot + curr}, 0)
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