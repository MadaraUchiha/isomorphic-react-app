import React from 'react';

export default class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = props;

        this.changeState = this.changeState.bind(this); // Because apparently, I need to do that now.
    }
    render() {
        return (
            <div>
                <div>{this.state.text}</div>
                <input onChange={this.changeState} />
            </div>
        );
    }
    changeState(event) {
        let text = event.target.value;
        this.setState({text});
    }
}