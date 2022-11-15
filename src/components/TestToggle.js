import React from "react";


// in javascript class, the methods are not bound by default.
// generally if you refer to a method without (), such as onClick={this.handleClick}, you should bind that method.
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        //this is binding is necessary to take 'this' work in callbacks
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.istoggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Toggle