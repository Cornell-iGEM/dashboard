import React from 'react'
import PH from './dashboard/ph.jsx'
import EC from './dashboard/ec.jsx';
import OS from './dashboard/os.jsx';
import Temp from './dashboard/temp.jsx';
var d3 = require('d3');
//import 'isomorphic-fetch';


export default class Historical extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        //this.setState({value: [this.props.initial_value]});
        let api_location = window.location.origin + "/data/1/" + this.props.name;
        var self = this;
        /*if (this.props.type == "pH") {
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
        */
        /*
        this.timerID = setInterval(
            () =>  fetch(api_location)
                .then((response) =>{
                    response.json().then((data) => {
                        this.value = [data.data];
                        this.setState({value: [data.data]});
                    });
                }),
            1000
        );*/
    };
    componentWillUnmount(){
        //clearInterval(this.timerID);
    }



    //some function that updates os and includes setState

    render() {
        return (
          <div>
            <div className="col-md-8 offset-md-2 graph"><PH graph_type="line"/></div>
            <div className="col-md-8 offset-md-2 graph"><EC graph_type="line"/></div>
            <div className="col-md-8 offset-md-2 graph"><OS graph_type="line"/></div>
            <div className="col-md-8 offset-md-2 graph"><Temp graph_type="line"/></div>
          </div>
        )
    }
}
