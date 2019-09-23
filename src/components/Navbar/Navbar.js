import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/auth-action'
import logo from '../../assets/walmart-logo-home.png'
import toggleButton from '../../assets/menu-icon-home.png'
import searchIcon from '../../assets/search-icon-home.png'

import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div className="navigation">
                <div className="navigationLeft">
                    <div className="navigationToggle">
                        <img src={toggleButton} alt="home-toggle-button"/>
                    </div>
                    <div className="navigationLogo">
                        <img src={logo} alt="home-logo"/>
                    </div>
                </div>
                <div className="navigationRight">
                    <div className={"navigationCreateButton"}>
                        <button>Create</button>
                    </div>
                    <div className={"navigationSearchBar"}>
                        <input placeholder={"Search.."}/>
                        <img src={searchIcon} alt="navbar-search-icon"/>
                    </div>
                </div>
            </div>
        )
    }
}
Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
}

const mapStateToProps = state  => ({

})

export default connect(mapStateToProps,{ logout })(withRouter(Navbar))