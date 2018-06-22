import React, {Component} from 'react'


class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {date: new Date()};
        this.timerStart();
    }

    timerStart() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {

        return (
            <div>
                <h2> It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );

    }
}

export default Clock;