import React, { Component } from 'react';

class CHeader extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-sm-3" style={{color:"white"}}><h4>Class info.</h4></div>
                <div className="col-sm-9" style={{color:"white"}} align="right"><h4>Control buttons</h4></div>
            </div>
        );
    }
}

export default CHeader;