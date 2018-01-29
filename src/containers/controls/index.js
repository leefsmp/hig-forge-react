import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React from 'react'
import './controls.css'

import {
  RadioButton,
  IconButton,
  TextField,
  TextArea,
  Dropdown,
  Checkbox,
  Button,
  Flyout,
  Range,
  Tabs,
  Tab
} from 'hig-react'

const View = (props) => (
  <div className="controls">
    <Tabs>
      <Tab label="Buttons">
        <Button
          title="Standard button"
          size="standard"
          width="shrink"
          onClick={() => {
            console.log('Small Button on click');
          }}
        />
        <Button
          title="Flat button"
          type="flat"
          onClick={() => {
            console.log('Small Button on click');
          }}
        />
        <IconButton
          title="Icon button"
          icon="assets"
          onClick={(e) => {
            e.preventDefault();
            console.log('Small Button on click');
          }}
        />
        <Flyout 
          content={"Hello, world!"}>
          <Button title="Flyout button"/>
        </Flyout>
      </Tab>
      <Tab label="Form Elements">
        <TextField
          label="Label" 
          placeholder="Placeholder" 
          instructions="Instructional text" 
        />
        <Dropdown
          label="Label"
          instructions="Instructions for regular dropdown"
          placeholder="Placeholder"
          options={
            [
              {
                label: "Green",
                value: "Green value"
              }, {
                label: "Blue",
                value: "Blue value"
              }
            ]
          }
          onChange={(e) => {
            console.log('dropdown change', e);
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Checkbox label="Required" required="You must check this box" />
          <Checkbox label="Disabled" disabled />
          <Checkbox label="Disabled + Checked" checked disabled />
          <Checkbox label="Indeterminate" indeterminate={true} checked={false} />
          <Checkbox label="Uncontrolled w/ default" defaultChecked />
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <RadioButton label="I AGREE" name="tsandcs" value="asd" required="Required" />
          <RadioButton label="Not required" name="tsandcs" value="dfdf" required={null}/>
          <RadioButton label="Disabled" name="tsandcs" value="hhh" disabled />
          <RadioButton label="Checked" name="tsandcs" value="werr" checked={true}/>
          <RadioButton label="Disabled and Checked" disabled checked />
        </div>
        <Range 
          label="Opacity" 
          minValue={0} 
          maxValue={100} 
          step={1} 
        />
      </Tab>
    </Tabs>
  </div>
)

const mapStateToProps = state => ({
 
})

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(View)