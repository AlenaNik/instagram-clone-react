import React, {Component} from 'react';

class User extends Component {
    render() {
        return (
            <a href="#" className="user">
                <img src={this.props.src}></img>
                <div>{this.props.name}</div>
            </a>
        );
    }
}

export default User;