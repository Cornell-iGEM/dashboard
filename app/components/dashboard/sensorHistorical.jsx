import React from 'react';
var d3 = require('d3');

export default class SensorHistorical extends React.Component{
    constructor(props){
        super(props);
    }
    shouldComponentUpdate(){
        return false;
    }
    componentDidMount(){
        console.log("mounted");
        console.log(this.props);
        this.setState({drawn: false})
        //this.drawChart();//TODO: make this cleaner
    }
    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render

        if (nextProps.historical !== this.props.historical) {
            if(!!nextProps.historical) {
                this.props = nextProps;
                this.drawChart();
            }
        }
    }
    drawChart(){
        var data = this.props.historical;
        var svg = d3.select('svg#' + this.props.name + '-line-chart').attr('width', 200).attr('height', 200);
        var valueline = d3.line()
            .x((d)=> {return x(d.time)})
            .y((d)=> {return y(d.data)});
        var x = d3.scaleLinear().range([0,200]);
        var y = d3.scaleLinear().range([200,0]);
        svg.append('g').attr('transform', "translate(0," + 180 + ")");
        data.forEach((d) => {
            console.log(d)
            d.data = +d.data;
        });
        x.domain(d3.extent(data, (d) => {return d.time}));
        y.domain([0,d3.max(data, (d) => {return d.data})]);
        svg.append('path')
            .data([data])
            .attr('class', 'line')
            .attr('d', valueline)
            .style('fill', 'none')
            .style('stroke', 'steelblue')
            .style('stroke-width', 2);
        svg.append('g').attr('transform', "translate(0," + 180+ ")").call(d3.axisBottom(x));
        svg.append('g').call(d3.axisLeft(y));
    }

    render(){
        return (
            <div>
                <svg id={this.props.name+"-line-chart"} ref={(elem) => { this.svg = elem; }}>
                </svg>
            </div>
        )
    }
}