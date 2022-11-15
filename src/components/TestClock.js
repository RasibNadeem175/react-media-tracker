import React from "react";
import FormattedDate from "./TestFormattedDate";
// when clock is passed to render in the app.js, the constructor of clock is classed since clock needs to display the current time, it initializes this state. the date object includes the current time
// every second browser calls tick that changes the state using set state which react uses to intelligently render on the screen
// state is local or encapsulated, neither parent or child components knows if it is stateful or stateless. You may choose to pass state down as a pop


class TestClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 
            800
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <FormattedDate date={this.state.date}/>
        )
    }
}

export default TestClock;
