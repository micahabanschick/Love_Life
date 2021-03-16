class Frontend {

    static necessities = [
        'Mortgage/Rent', 'Homeowner\'s Insurance/Renter\'s Insurance', 'Auto Insurance', 'Health Insurance', 'Life Insurance', 'Gasoline', 'Electricity', 'Water', 'Garbage', 'Groceries', 'Toiletries and other essentials', 'Car Payment', 'Property Tax', 'Natural Gas', 'Public Transportation', 'Internet', 'Cell Phone', 'Landline', 'Student Loan Payment', 'Other Minimum Loan Payments', 'Child Support', 'Alimony Payment', 'Childcare'
    ]

    static luxuries = [
        'Clothing, jewelry, etc.', 'Dining out', 'Special meals in (steaks for the grill, etc.)', 'Alcohol', 'Movie, concert and event tickets', 'Gym or club memberships', 'Travel expenses (airline tickets, hotels, rental cars, etc.)', 'Cable or streaming packages', 'Self-care and personal grooming', 'Home Decor'
    ]

    static investments = [
        'Emergency fund', 'Savings account', '401(k)', 'Individual retirement account', 'Other investments', 'Credit card payments (see budget tip below)', 'Extra payments on mortgage', 'Extra payments on student loans'
    ]
//
// ------------------------------ renderPortfolio(user) -START-    
//
static renderPortfolio(user) {
        let portfolio = document.createElement('div');
        portfolio.setAttribute('id', 'portfolio');
        let monthlyIncome = user.monthlyIncome;
        let mainInput = {
            values: [(monthlyIncome * 0.5), (monthlyIncome * 0.3), (monthlyIncome * 0.2)], // % of slice
            labels: ['Necessities', 'Luxuries', 'Investments'], // name of slice
            colors: [
                'rgb(255,0,0)',
                'rgb(255,255,0)',
                'rgb(0,0,255)'
            ],
            layout: {
                title: 'Goal!',
                height: 200,
                width: 200,
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

        document.body.appendChild(main);
        document.body.appendChild(portfolio);
        document.querySelector('text.gtitle').style.fontWeight = 'bold'; // Boldens the pie's title
        portfolio.appendChild(listNecessities);
        portfolio.appendChild(listLuxuries);
        portfolio.appendChild(listInvestments);
        // let backend = new Backend;
        // backend.basicFetch('get', 'users', [], resp => {
        //     console.log(resp.data[0].attributes.monthly_income)
        // });
        for (let i = 0; i < expenses.length; i++) {
            let pieInput = {
                values: expenses[i].map(expense => {
                    let total = mainInput.values[i];
                    let slice = total/(expenses[i].length);
                    return slice;
                }), // % of slice
                labels: expenses[i], // name of slice
                automargin: true,
                colors: expenses[i].map(expense => {
                    let a = expense.length * 8;
                    let b = 200 - (expense.length * 8);
                    let c = (expenses[i].indexOf(expense) + 6) * 10;
                    return `rgb(${a}, ${b}, ${c})`
                }),
                
                layout: {
                    title: `${listExpenses[i].id.toUpperCase()}`,
                    height: 250,
                    width: 250,
                    showlegend: false,
                    margin: {"t": 30, "b": 0, "l": 0, "r": 0}
                }
            };
    
            let pie = new Pie(pieInput);
            pie.plot(`${listExpenses[i].id}-chart`);
            let p = document.getElementById(`${listExpenses[i].id}-chart`);
            listExpenses[i].appendChild(p);
            for (let j = 0; j < expenses[i].length; j++) {
                let listItem = document.createElement('li');
                let listAnchor = document.createElement('a');
                listAnchor.innerHTML = expenses[i][j];
                listExpenses[i].appendChild(listItem);
                listItem.appendChild(listAnchor);
                listAnchor.setAttribute('href', '#');
                listAnchor.setAttribute('class', 'items');
            };
        };
    }
//    
// -------------------------------- renderPortfolio(user) -END-    
//
    static removePorfolio() {
        let element = document.getElementById('portfolio');
        element.remove();
    }

    static selectItem() {
        document.body.querySelector('div#portfolio li a').addEventListener('click', function(event) {
            console.log('lol');
        });
    }

};