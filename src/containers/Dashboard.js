import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
class Docs extends Component {

    componentDidMount() {
        // to-do
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="container" style={{marginTop:'5rem'}}>
                    <div className="jumbotron">
                        <h1>React Boilerplate</h1>
                        <hr size="30"/>
                        <h5>Clean and simple react boilerplate </h5>
                        <h6>
                            <ul>
                                <li><a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer">Introduction to React</a></li>
                                <li><a href="https://react-redux.js.org/introduction/quick-start" target="_blank" rel="noopener noreferrer">Redux store management</a></li>
                                <li><a href="https://reacttraining.com/react-router/web/guides/quick-start" target="_blank" rel="noopener noreferrer">React router</a></li>
                                <li><a href="#" rel="noopener noreferrer">Walmart SSO integrated</a></li>
                                <li><a href="https://reactjs.org/docs/higher-order-components.html" target="_blank" rel="noopener noreferrer">High order components</a></li>
                            </ul>
                        </h6>
                    </div>
                </div>
            </div>
        );
    }
}

Docs.propTypes = {
    auth: PropTypes.object,
}

const mapStateToProps = state  => ({
    auth:state.auth,
})

export default connect(mapStateToProps)(withRouter(Docs))

