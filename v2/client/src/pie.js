class Pie {

    constructor(data={
        values: [50, 30, 20], // % of slice
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
    }) {
        this._values = data.values;
        this._labels = data.labels;
        this._colors = data.colors;
        this._layout = data.layout;
    }

    get values() {
        return this._values;
    }

    get labels() {
        return this._labels;
    }

    get colors() {
        return this._colors;
    }

    get layout() {
        return this._layout;
    }

    set values(values) {
        this._values = values;
    }

    set labels(labels) {
        this._labels = labels;
    }

    set colors(colors) {
        this._colors = colors;
    }

    set layout(layout) {
        this._layout = layout;
    }

    newData() {
        let arr = [{
            values: this.values, // % of slice
            labels: this.labels, // name of slice
            // hoverinfo: 'label+percent+name',
            type: 'pie',
            marker: {
                colors: this.colors
            }
        }];
        return arr;
    }

    plot(id) {
        const div = document.createElement("li");
        div.setAttribute("id", id);
        div.setAttribute("class", "pie-chart");
        document.body.appendChild(div);
        return Plotly.newPlot(id, this.newData(), this.layout);
    }

    static removePlot(id) {
        let element = document.getElementById(id);
        element.remove();
    }

};