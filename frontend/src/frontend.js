class Frontend {

    static renderPage() {
        document.body.innerHTML+=`
            <div id="portfolio">
                <ul id="Necessities">
                    <li></li>
                </ul>
            </div>
        `
    }

    static removeLogin(){
        let element = document.getElementById('portfolio');
        element.remove();
    }

};