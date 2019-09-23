import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

class Logout extends Component {

    componentDidMount() {
        // to-do
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    You have been logged out. Click <Link to="/home">here</Link>  to login again.
                </div>
            </div>
        );
    }
}

Logout.propTypes = {
    auth: PropTypes.object,
}

const mapStateToProps = state  => ({
    auth:state.auth,
})

export default connect(mapStateToProps)(withRouter(Logout))

