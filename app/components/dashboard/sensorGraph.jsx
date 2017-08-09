import React from 'react';
var d3 = require('d3');

export default class SensorGraph extends React.Component{
    constructor(props){
        super(props);
    }

    shouldComponentUpdate(){
        return false;
    }

    componentDidMount(){
        /*this.timerID = setInterval(
            () => console.log(this.props.value),
            1000
        );*/
        console.log("props in didmount:", this.props);
        this.drawChart();
    }

    updateChart(){
        var svg = d3.select('svg#' + this.props.name + "-chart").attr('width', 300).attr('height', 30)
        var line = svg.selectAll('line')
            .data(this.props.value)
            .attr('x1', (d) => {
                console.log("props in line:", this.props.value, new Date());
                return this.props.x(d)})
            .attr('x2', (d) => { return this.props.x(d)})
            .attr('y1', 0)
            .attr('y2', 100)
            .style('stroke', 'black')
            .style('stroke-width', 3);
        console.log(svg);
        svg.exit().remove();
    }

    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if (nextProps.value !== this.props.value) {
            if(!!this.props.value) {
                console.log("props in chart:", this.props.value, new Date());
                this.props = nextProps;
                console.log("props in chart:", this.props.value, new Date());
                this.updateChart();
            }
        }
    }

    componentWillUnmount(){
        //clearInterval(this.timerID);
    }
    drawChart(){
        //d3 code
        var svg = d3.select('svg#' + this.props.name + "-chart").attr('width', 200).attr('height', 100)


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
            .data(this.props.value)
            .attr('x1', (d) => {
                console.log(d);
                return this.props.x(d)})
            .attr('x2', (d) => { return this.props.x(d)})
            .attr('y1', 0)
            .attr('y2', 100)
            .style('stroke', 'black')
            .style('stroke-width', 3);

    }

    render(){
        return (
            <div>
                <svg id={this.props.name+"-chart"} ref={(elem) => { this.svg = elem; }}>
                </svg>
            </div>
        )
    }
}
