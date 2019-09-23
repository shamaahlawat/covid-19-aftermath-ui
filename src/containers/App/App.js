import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { handleAuthentication } from '../../actions/auth-action'
import Dashboard  from "../Dashboard";
import Loader from "./Loader";
class App extends Component {

  componentDidMount() {
    if(!this.props.auth.isAuthenticated){
      this.props.handleAuthentication();
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.auth) {
      window.history.pushState({}, document.title, "/");
    }
  }

  render() {
    let { auth } = this.props
    return (
        <div>
        {auth.isAuthenticated?<Dashboard/>:<Loader/>}
        </div>
    );
  }
}

App.propTypes = {
  handleAuthentication: PropTypes.func.isRequired,
  auth: PropTypes.object,
}

const mapStateToProps = state  => ({
  errors:state.errors,
  auth:state.auth,
})

export default connect(mapStateToProps,{ handleAuthentication })(withRouter(App))

