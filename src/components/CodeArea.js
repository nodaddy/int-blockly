/**
 * @license
 *
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from 'react';
import './CodeArea.css';


//import logo from '../logo.svg';

import BlocklyComponent, { Block, Value, Field, Shadow } from '../Blockly';

import BlocklyJS from 'blockly/javascript';
import {withRouter} from 'react-router-dom';
import '../blocks/customblocks';
import '../generator/generator';
import { homeIcon } from '../assets';

class CodeArea extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
  }

  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );
    console.log(code);
    document.getElementById("to-be-made-unique").innerHTML = code;
  }

  render() {
    return (
      <div className="row code-area-row">
        <div className="col-sm-3" align="left" style={{padding:"10px"}}>
          <div style={{borderRadius:"5px", backgroundColor:" #4E4B66", padding:"10px"}}>
          
        <h6>Converted code will be shown here:</h6>
        <p align="left" style={{borderRadius: "5px", backgroundColor:"white", padding:"15px", color: "black"}} id="to-be-made-unique"></p>
        <button align="center" style={{borderRadius: "5px", padding:"5px", background: "#00BA88", margin:"auto"}}>Run code</button>
        <br/>
        <br/>
        <h6>Output:</h6>
        <p style={{borderRadius: "5px", backgroundColor:"silver", padding:"15px"}} id="to-be-made-unique1"></p>
        </div>
        </div>
          <div className="col-sm-9" align="left" style={{padding:"10px"}}>
          <div className="bcC" style={{borderRadius:"5px", backgroundColor:" #4E4B66", padding:"10px"}}>
           
          <h6>Code editor</h6>
          <BlocklyComponent ref={this.simpleWorkspace}
          readOnly={false} trashcan={true}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true
          }}
          initialXml={`
<xml xmlns="http://www.w3.org/1999/xhtml">
<block type="controls_ifelse" x="0" y="0"></block>
</xml>
      `}>
            <Block type="test_react_field" />
            <Block type="test_react_date_field" />
            <Block type="controls_ifelse" />
            <Block type="logic_compare" />
            <Block type="logic_operation" />
            <Block type="controls_repeat_ext">
              <Value name="TIMES">
                <Shadow type="math_number">
                  <Field name="NUM">10</Field>
                </Shadow>
              </Value>
            </Block>
            <Block type="logic_operation" />
            <Block type="logic_negate" />
            <Block type="logic_boolean" />
            <Block type="logic_null" disabled="true" />
            <Block type="logic_ternary" />
            <Block type="text_charAt">
              <Value name="VALUE">
                <Block type="variables_get">
                  <Field name="VAR">text</Field>
                </Block>
              </Value>
            </Block>
          </BlocklyComponent>
          <br/>
          <button style={{paddingLeft:"20px", paddingRight:"20px"}} align="left" onClick={()=>{
            this.generateCode();
          }}>Convert Code</button>
          </div>
        </div>
        </div>
    );
  }
}

export default withRouter(CodeArea);
