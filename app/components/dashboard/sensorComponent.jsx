import React from 'react';
var d3 = require('d3');

export default class SensorComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("in constructor");
        console.log(this.props.x);
        console.log(this.props);
        this.state = {value: this.props.initial_value};
    };
    componentDidMount(){

        console.log("state:", this.state);
        this.drawChart();
        console.log("mounted component");
    };
    shouldComponentUpdate(){
        return false;
    }
    drawChart(){
        //d3 code
        var svg = d3.select('svg#' + this.props.name + "-chart").attr('width', 200).attr('height', 100);
        var grad = svg.append('defs').append('linearGradient')
            .attr('id', 'grad' + this.props.name)
            .attr('x1', '0%').attr('x2', '100%')
            .attr('y1', '0%').attr('y2', '0%');
        grad.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', 'red');
        grad.append('stop')
            .attr('offset', '50%')
            .attr('stop-color', 'yellow');
        grad.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', 'green');
        svg.append('rect')
            .attr('width', 200)
            .attr('height', 80)
            .attr('y', 10)
            .style('fill', 'url(#grad'+this.props.name+')');

        var line = svg.append('line')
            .attr('x1', this.props.x(this.state.value))
            .attr('x2', this.props.x(this.state.value))
            .attr('y1', 0)
            .attr('y2', 100)
            .style('stroke', 'black')
            .style('stroke-width', 3);

    }

    //some function that updates os and includes setState

    render() {
        return (
            <div className={this.props.name+"-area"}>
                <div className="col-md-8 offset-md-2">
                    <h2>{this.props.type}: {this.state.value} {this.props.unit}</h2>
                    <svg id={this.props.name+"-chart"} ref={(elem) => { this.svg = elem; }}>
                    </svg>
                </div>
            </div>
        )
    }
}
