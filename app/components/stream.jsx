import React from 'react';
import Img from 'react-image';
import Brightness from './dashboard/brightness.jsx';

export default class Stream extends React.Component {
    constructor(props){
        super(props);
        this.state = {time: (new Date).getTime()}
    }
    componentWillMount() {
        this.timerID = setInterval(
            () => this.setState({time: (new Date).getTime()})
            , 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    //?timestamp allows
    render() {
        return (
            <div>
                <Img src={"http://localhost:5000/image/image_raw.png?" + this.state.time}/>
                <Img src={"http://localhost:5000/image/image_process.png?" + this.state.time}/>
                     {/*<Brightness/>*/}
            </div>
        )
    }
}
