import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: "Changed Link"
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        },3000);
    }

    onMakeMeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    render() {
        return(
            <div>
                <p>In a new component</p>
                <p>Your name is {this.props.name}, your age is {this.state.age}</p>
                <p>Status : {this.state.status}</p>
                <hr/>
                <button onClick={() => this.onMakeMeOlder()} className="btn btn-primary">Make me older!</button>
                <hr/>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number,
    greet: PropTypes.func
};