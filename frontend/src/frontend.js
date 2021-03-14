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

        let mainInput = {
            values: [50, 30, 20], // % of slice
            labels: ['Necessities', 'Luxuries', 'Investments'], // name of slice
            colors: [
                'rgb(255,0,0)',
                'rgb(255,255,0)',
                'rgb(0,0,255)'
            ],
            layout: {
                title: 'Necessities, Luxuries, and Investments Goal',
                height: 300,
                width: 400,
                showlegend: false,
                margin: {"t": 30, "b": 0, "l": 0, "r": 0}
            }
        };
        let mainPie = new Pie(mainInput);
        mainPie.plot(`main-chart`);
        let main = document.getElementById(`main-chart`);

        let listNecessities = document.createElement('ul');
        listNecessities.setAttribute('id', 'necessities');
        let listLuxuries = document.createElement('ul');
        listLuxuries.setAttribute('id', 'luxuries');
        let listInvestments = document.createElement('ul');
        listInvestments.setAttribute('id', 'investments');
        const expenses = [this.necessities, this.luxuries, this.investments];
        const listExpenses = [listNecessities, listLuxuries, listInvestments];

        document.body.appendChild(portfolio);
        portfolio.appendChild(main);
        document.querySelector('text.gtitle').style.fontWeight = 'bold'; // Boldens the pie's title
        portfolio.appendChild(listNecessities);
        portfolio.appendChild(listLuxuries);
        portfolio.appendChild(listInvestments);

        for (let i = 0; i < expenses.length; i++) {
            let pieInput = {
                values: [10, 15, 20, 35, 3, 17], // % of slice
                labels: expenses[i], // name of slice
                automargin: true,
                colors: expenses[i].map(expense => {
                    let a = expense.length * 7;
                    let b = 255 - (expense.length * 5);
                    let c = (expenses[i].indexOf(expense) + 6) * 10;
                    return `rgb(${a}, ${b}, ${c})`
                }),
                
                layout: {
                    title: 'Title',
                    annotations: [{
                        font: {
                            size: 10
                        },
                        showarrow: false,
                        text: 'GHG',
                        x: 0.17,
                        y: 0.5
                    }],
                    height: 300,
                    width: 300,
                    showlegend: false,
                    margin: {"t": 0, "b": 0, "l": 0, "r": 0}
                }
            };
    
            let pie = new Pie(pieInput);
            pie.plot(`${listExpenses[i].id}-chart`);
            let p = document.getElementById(`${listExpenses[i].id}-chart`);
            listExpenses[i].appendChild(p);
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