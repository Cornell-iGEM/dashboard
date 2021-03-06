import React from 'react';
var d3 = require('d3');
//import 'isomorphic-fetch';
import SensorGraph from './sensorGraph.jsx';
import SensorHistorical from './sensorHistorical.jsx';

export default class SensorComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: [this.props.initial_value]};
        this.value = [this.props.initial_value];
    };

    componentDidMount() {
        //this.setState({value: [this.props.initial_value]});
        let api_location = window.location.origin + "/data/1/" + this.props.name;
        var self = this;
        if (this.props.graph_type == "line") {
            fetch(api_location + '/historical').then(
                (response) => {
                    response.json().then(
                        (data) => {
                            console.log(data);
                            this.historical = data;
                            this.setState({historical: data})
                        }
                    )
                }
            );
        }
        else {

            this.timerID = setInterval(
                () => fetch(api_location)
                    .then((response) => {
                        response.json().then((data) => {
                            this.value = [data.data];
                            this.setState({value: [data.data]});
                        });
                    }),
                1000
            );
        }
    };
    componentWillUnmount(){
        if(this.props.graph_type !="line")
            clearInterval(this.timerID);
    }



    //some function that updates os and includes setState

    render() {
        let body = null;
        if(this.props.graph_type == "line")
            body = (<div className={this.props.name+"-area"}>
                <div className="col-md-8 offset-md-2">
                    <h2 className="graph-type">{this.props.type} </h2>
                    <SensorHistorical {...this.props} historical={this.historical}/>
                </div>
            </div>);
        else
            body = (<div className={this.props.name+"-area"}>
                <div className="col-md-8 offset-md-2">
                    <h2 className="data-type">{this.props.type} </h2>
                    <h2 className="data-value">{parseFloat(this.state.value).toFixed(2)} <span className="units">{this.props.unit}</span></h2>
                    <SensorGraph {...this.props} value={this.value}/>
                </div>
            </div>);
        return (
            body
        )
    }
}
