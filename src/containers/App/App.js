import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Dashboard  from "../Dashboard";
import './App.css'
class App extends Component {

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
        <Dashboard/>
    );
  }
}

App.propTypes = {
  errors:PropTypes.object
}

const mapStateToProps = state  => ({
  errors:state.errors,
})

export default connect(mapStateToProps,{  })(withRouter(App))

