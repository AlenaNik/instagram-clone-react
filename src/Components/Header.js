import React, {Component} from 'react';
import logo from '../logo.svg';
export default class Header extends Component {
    render() {
        return (
         <header>
            <div className="container h-flex">
                <a href="#" className="logo">
                    <img src={logo}/>
                </a>
                <nav className="links">
                <ul>
                    <li>
                        <i className="far fa-heart fa-2x"></i>
                    </li>
                    <li>
                        <a href="#" className="menu__links">
                            <i className="fas fa-cat fa-2x"></i>
                        </a>
                    </li>
                </ul>
                </nav>
            </div>
         </header>
        );
    }
}
