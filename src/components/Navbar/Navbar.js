import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/walmart-logo-home.png'


import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <div className="navigation">
                <div className={"container"}>
                    <div className="navigationLeft">
                        <Link to={"/"}> <div className="navigationLogo">
                           Covid-19 Job Tracker
                        </div>
                        </Link>
                    </div>
                    <div className="navigationRight">
                        <div className={"contributeButton"}>
                            <Link to={"contribute"}>Contribute to the tracker</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Navbar.propTypes = {
}

const mapStateToProps = state  => ({

})

export default connect(mapStateToProps,{  })(withRouter(Navbar))