import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavCollapsed: true,
        };
    }

    handleNavCollapse = () => {
        this.setState({
            isNavCollapsed: !this.state.isNavCollapsed,
        });
    };

    render() {
        return (
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>
                    ExerTracker
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded={!this.state.isNavCollapsed ? true : false}
                    aria-label='Toggle navigation'
                    onClick={this.handleNavCollapse}
                >
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div
                    className={`${
                        this.state.isNavCollapsed ? "collapse" : ""
                    } navbar-collapse`}
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                            <Link to='/' className='nav-link'>
                                Exercises
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/create' className='nav-link'>
                                Create Exercise Log
                            </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/user' className='nav-link'>
                                Create User
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
