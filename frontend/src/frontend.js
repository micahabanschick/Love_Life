class Frontend {

    static necessities = [
        'Mortgage', 'Rent', 'Homeowner\'s Insurance', 'Renter\'s Insurance', 'Auto Insurance', 'Health Insurance', 'Life Insurance', 'Gasoline', 'Electricity', 'Water', 'Garbage', 'Groceries', 'Toiletries and other essentials', 'Car Payment', 'Property Tax', 'Natural Gas', 'Public Transportation', 'Internet', 'Cell Phone', 'Landline', 'Student Loan Payment', 'Other Minimum Loan Payments', 'Child Support', 'Alimony Payment', 'Childcare'
    ]

    static luxuries = [
        'Clothing, jewelry, etc.', 'Dining out', 'Special meals in (steaks for the grill, etc.)', 'Alcohol', 'Movie, concert and event tickets', 'Gym or club memberships', 'Travel expenses (airline tickets, hotels, rental cars, etc.)', 'Cable or streaming packages', 'Self-care and personal grooming', 'Home Decor'
    ]

    static investments = [
        'Emergency fund', 'Savings account', '401(k)', 'Individual retirement account', 'Other investments', 'Credit card payments (see budget tip below)', 'Extra payments on mortgage', 'Extra payments on student loans'
    ]
    
    static renderPortfolio() {
        let portfolio = document.createElement('div');
        portfolio.setAttribute('id', 'portfolio');
        let listNecessities = document.createElement('ul');
        listNecessities.setAttribute('id', 'necessities');
        let listLuxuries = document.createElement('ul');
        listLuxuries.setAttribute('id', 'luxuries');
        let listInvestments = document.createElement('ul');
        listInvestments.setAttribute('id', 'investments');
        const expenses = [this.necessities, this.luxuries, this.investments];
        const listExpenses = [listNecessities, listLuxuries, listInvestments];

        document.body.appendChild(portfolio);
        portfolio.appendChild(listNecessities);
        portfolio.appendChild(listLuxuries);
        portfolio.appendChild(listInvestments);

        for (let i = 0; i < expenses.length; i++) {
            for (let j = 0; j < expenses[i].length; j++) {
                let listItem = document.createElement('li');
                listItem.innerHTML = expenses[i][j];
                listExpenses[i].appendChild(listItem);
            };
        };
    }

    static removePorfolio() {
        let element = document.getElementById('portfolio');
        element.remove();
    }

};