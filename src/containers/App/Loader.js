import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import loader from '../../assets/loader.gif'

class Loader extends Component {
    componentDidMount() {
        // to-do
    }

    render() {
        return (
            <div style={{position:"absolute", backgroundColor:"white", width:"100%", height:"100%"}}>
                <img src={loader} alt="loader" style={{position:"absolute", left:"50%", width:"60px", marginLeft:"-30px", top:"45%"}}/>
            </div>
        );
    }
}

const mapStateToProps = state  => ({
   //to-do
})

export default connect(mapStateToProps)(withRouter(Loader))

