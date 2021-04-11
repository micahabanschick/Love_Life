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
        // let monthlyIncome = user.monthlyIncome;
        let pie = new Pie();
        pie.plot(`main-chart`);
        let plot = document.getElementById(`main-chart`);

        let listNecessities = document.createElement('ul');
        listNecessities.setAttribute('id', 'necessities');
        let listLuxuries = document.createElement('ul');
        listLuxuries.setAttribute('id', 'luxuries');
        let listInvestments = document.createElement('ul');
        listInvestments.setAttribute('id', 'investments');
        const expenses = [this.necessities, this.luxuries, this.investments];
        const listExpenses = [listNecessities, listLuxuries, listInvestments];

        document.body.appendChild(plot);
        document.body.appendChild(portfolio);
        document.querySelector('text.gtitle').style.fontWeight = 'bold'; // Boldens the pie's title
        portfolio.appendChild(listNecessities);
        portfolio.appendChild(listLuxuries);
        portfolio.appendChild(listInvestments);
        
        for (let i = 0; i < expenses.length; i++) {
            let listName = document.createElement('h2');
            listName.textContent = listExpenses[i].id.toUpperCase();
            listExpenses[i].appendChild(listName);
            
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
    static resize(user) {
        let portfolio = document.getElementById('portfolio');
        // let monthlyIncome = user.monthlyIncome;
        let totalN = user.totalNecessities;
        let totalL = user.totalLuxuries;
        let totalI = user.totalInvestments;

        let pie = new Pie();
        pie.values = [totalN,totalL,totalI];
        // pie.plot(`main-chart`);
        Plotly.react(`main-chart`, pie.newData(), pie.layout);
        // let plot = document.getElementById(`main-chart`);
        // document.body.insertBefore(plot, portfolio);

        let listNecessities = document.getElementById('necessities');
        let listLuxuries = document.getElementById('luxuries');
        let listInvestments = document.getElementById('investments');
        const expenses = [this.necessities, this.luxuries, this.investments];
        const listExpenses = [listNecessities, listLuxuries, listInvestments];

        document.querySelector('text.gtitle').style.fontWeight = 'bold'; // Boldens the pie's title
    }

    static removePorfolio() {
        let element = document.getElementById('portfolio');
        element.remove();
        let pie = document.getElementById(`main-chart`);
        pie.remove();
        User.displayLogin();
        // window.location.reload();
    }

    static selectItem() {
        document.body.querySelector('div#portfolio li a').addEventListener('click', function(event) {
            console.log('lol');
        });
    }

};