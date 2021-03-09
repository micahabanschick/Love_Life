class Pie {

    constructor(data={}) {
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
            type: 'pie',
            marker: {
                colors: this.colors
            }
        }];
        return arr;
    }

};