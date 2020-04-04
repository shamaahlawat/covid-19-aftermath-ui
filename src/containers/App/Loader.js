import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import loader from '../../assets/loader.gif'
import { Spin, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 60, color:'grey' }} spin />;
class Loader extends Component {
    componentDidMount() {
        // to-do
    }

    render() {
        return (
            <div className={"loader"}>
                <Spin indicator={antIcon}>
                </Spin>
            </div>
        );
    }
}

const mapStateToProps = state  => ({
   //to-do
})

export default connect(mapStateToProps)(withRouter(Loader))

