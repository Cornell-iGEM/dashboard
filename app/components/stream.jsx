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

    render() {
        return (
            <div>
                <Img src={"http://citronnade.mooo.com/image?" + this.state.time}/>
                <Brightness/>
            </div>
        )
    }
}
