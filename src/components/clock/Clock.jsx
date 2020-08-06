import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }


    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {

        return (
            <div classname="Clock">
                <h2> This is {this.state.date.toLocaleTimeString()}.</h2>
            <h1>CLOCK</h1>
            </div>

        );

    }

}

export default Clock;