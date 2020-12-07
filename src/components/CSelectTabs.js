import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CSelectTabs.css';
import { homeIcon } from '../assets';

class CSelectTabs extends Component {

    state = {
        inFocus : "teacher"
    }

    render(){
        return (
            <div className="row">
                <button to="/chome" type="button"
                onClick={()=>{
                    this.setState({inFocus: "chome"});
                   // window.location.reload();
                }}
                className={this.state.inFocus=="chome" ? "c-select-tab-in-focus" : "c-select-tab"}>
                    <img style={{width:'75%'}} src={homeIcon}></img>
                </button>
                <button to="/codearea" type="button" onClick={()=>{
                    this.setState({inFocus: "teacher"});
                }}
                
                className={this.state.inFocus=="teacher" ? "c-select-tab-in-focus" : "c-select-tab"}>
                    Teacher</button>
                    {
                         this.props.studentsData.map(student => {
                            return (
                                <button type="button" onClick={()=>{
                                    this.setState({inFocus: `${student.firstName+student.lastName}`});
                                }}
                                className={this.state.inFocus==`${student.firstName+student.lastName}` ? "c-select-tab-in-focus" : "c-select-tab"}>{student.firstName}</button>
                            )
                        }) 
                    }  
                     <button type="button" onClick={()=>{
                    this.setState({inFocus: "whiteboard"});
                }}
                className={this.state.inFocus=="whiteboard" ? "c-select-tab-in-focus" : "c-select-tab"}>Whiteboard</button>
                     <button type="button" onClick={()=>{
                    this.setState({inFocus: "pdf"});
                }}
                className={this.state.inFocus=="pdf" ? "c-select-tab-in-focus" : "c-select-tab"}>PDF</button>
              
                </div>
        );
    }
}


function mapStateToProps(state){
    return {
        studentsData: state.studentsData
    }
}

export default connect(mapStateToProps)(CSelectTabs);