import React, { Component } from 'react';
import './CHome.css';

class CHome extends Component {
    render() {
        return (
            <div className="row" id="CHomeBG">
                <div className="col-sm-6"><h5>Online student photos/profiles</h5></div>
                <div className="col-sm-3"><h5>Poll</h5></div>
                <div className="col-sm-3"><h5>Chat</h5></div>
            </div>
        );
    }
}

export default CHome;