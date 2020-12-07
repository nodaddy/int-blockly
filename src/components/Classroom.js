import React, { Component } from 'react';
import { connect } from 'react-redux';
import CHome from './CHome';
import CHeader from './CHeader';
import CSelectTabs from './CSelectTabs';
import CodeArea from './CodeArea';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom'; 

function Classroom(props) {
        return (
            <div className="container-fluid" align="center">
                <CHeader/>
                <hr/>
                <Router>
                    <CSelectTabs/>
                    <Switch>
                        <Route path="/chome">
                            <CHome/>
                        </Route>
                        <Route exact path="/">
                            <CodeArea/>
                        </Route>
                       
                    </Switch>
                </Router>
               
            </div>
        );
}

function mapStateToProps(state){
    return {
        studentsData: state.studentsData
    }
}

export default connect(mapStateToProps)(Classroom);