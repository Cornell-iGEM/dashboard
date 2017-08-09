import React from 'react';
var d3 = require('d3');

export default class SensorComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("in constructor");
    };
    componentDidMount(){
        this.drawChart();
        console.log("mounted component");
    };
    shouldComponentUpdate(){
        return false;
    }
    drawChart(){
        //d3 code
        var svg = d3.select('svg#' + this.props.type + "-chart").attr('width', 200).attr('height', 100);
        var grad = svg.append('defs').append('linearGradient')
            .attr('id', 'grad' + this.props.type)
            .attr('x1', '0%').attr('x2', '100%')
            .attr('y1', '0%').attr('y2', '0%');
        grad.append('stop')
            .attr('offset', '0%')
            .attr('stop-color', 'red');
        grad.append('stop')
            .attr('offset', '50%')
            .attr('stop-color', 'green');
        grad.append('stop')
            .attr('offset', '100%')
            .attr('stop-color', 'yellow');
        svg.append('rect')
            .attr('width', 200)
            .attr('height', 100)
            .style('fill', 'url(#grad'+this.props.type+')');
    }

    //some function that updates os and includes setState

    render() {
        return (
            <div className={this.props.type+"-area"}>
                <div className="col-md-8 offset-md-2">
                    <h2>{this.props.type}</h2>
                    <svg id={this.props.type+"-chart"} ref={(elem) => { this.svg = elem; }}>
                    </svg>
                </div>
            </div>
        )
    }
}
