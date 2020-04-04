import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar";
import { getCompanies } from '../actions/company-action'
import './Dashboard.css'
import Loader from "./App/Loader";
import { Input } from 'antd';
import { Table, Tag } from 'antd';

const columns = [
    {
        title: 'Name',
        dataIndex: 'companyName',
        key: 'companyName',
        render: text => <a>{text}</a>,
        // sorter: (a, b) => a.companyName.length - b.companyName.length,
        // sortDirections: ['descend', 'ascend'],
        defaultSortOrder:'descend'
    },
    {
        title: 'Hiring Status',
        dataIndex: 'hiringStatus',
        key: 'hiringStatus',
        render: hiringStatus => (
                <Tag color={hiringStatus==='Hiring'?'green':(hiringStatus==='Hiring Freeze'?'geekblue':'volcano')} >
                    {hiringStatus.toUpperCase()}
                </Tag>
        )
    },
    {
        title: 'Salary Cuts',
        dataIndex: 'salaryCut',
        key: 'salaryCut',
        render: salaryCut => (
            <Tag color={salaryCut==='Yes'?'volcano':'green'} >
                {salaryCut.toUpperCase()}
            </Tag>
        )
    },
    {
        title: 'Location',
        dataIndex: 'city',
        key: 'city',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Sector',
        dataIndex: 'industry',
        key: 'industry',
        render: text => <a>{text}</a>,
    }
    // {
    //     title: 'Action',
    //     key: 'action',
    //     render: (text, record) => (
    //         <span>
    //     <a style={{ marginRight: 16 }}>Invite {record.name}</a>
    //     <a>Delete</a>
    //   </span>
    //     ),
    // },
];

const { Search } = Input;

class Docs extends Component {


    componentDidMount() {
        this.props.getCompanies();
    }

    render() {
        let { companies } = this.props;
        return (
            <div>
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
                {companies.loading && <Loader/>}
                {!companies.loading && <div className="container" style={{marginTop:'5rem'}}>
                    <div className={"header"}>
                        <div className={"liveTag"}>LIVE</div>
                        <div className={"headerText"}>Is your career at risk?</div>
                    </div>
                    <div className={"totalCompanies"}>We are tracking {companies.companies.length} companies worldwide for hirings, salary cuts and layoffs.</div>
                    <div className={"companySearch"}>
                        <label>Search with your location</label>
                        <Search
                            placeholder="search here.."
                            enterButton="Search"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </div>
                    <div className={"statsSection"}>
                        <div className={"tableHeader"}>Top companies currently hiring</div>
                        {companies.companies.length>0 && <Table columns={columns} dataSource={companies.hirings} tableLayout={"fixed"} size={"middle"}/>}
                        {/*{companies.companies.length>0 && <Table columns={columns} dataSource={companies.layoffs} />}*/}
                        {/*{companies.companies.length>0 && <Table columns={columns} dataSource={companies.hiringFreeze} />}*/}

                    </div>
                </div>}
            </div>
        );
    }
}

Docs.propTypes = {
    getCompanies:PropTypes.func.isRequired,
    companies:PropTypes.object.isRequired
}

const mapStateToProps = state  => ({
    companies:state.companies
})

export default connect(mapStateToProps, {getCompanies})(withRouter(Docs))

