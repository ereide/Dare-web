import React from 'react';

import { Row, Col, Image, Button } from 'react-bootstrap';

import {
  Form,
  FormControl,
  FormGroup,
  formBasicText,
  HelpBlock,
  ControlLabel,
  InputGroup,
  Glyphicon,
  Collapse,
} from 'react-bootstrap';

import Dialog from 'react-bootstrap-dialog'

import { Link } from 'react-router-dom';

import './containers.css'


function TryParseInt(str,defaultValue) {
     var retValue = defaultValue;
     if(str !== null) {
         if(str.length > 0) {
             if (!isNaN(str)) {
                 retValue = parseInt(str);
             }
         }
     }
     return retValue;
}

class ChallengeButton extends React.Component {
  constructor(props) {
      super(props)
      this.state = {challenge: props.challenge, challengersLeft: props.numplayers, currentStatus: true}
      this.handleButton = this.handleButton.bind(this);

  }

  handleButton(isYes) {
        let newStatus = this.state.currentStatus && isYes;
        //   TODO:  add something ala    Vibration.vibrate();
        if (this.state.challengersLeft === 1) {
            this.props.votesIn(newStatus);
        }
  
  
        else {
            let state = {currentStatus: newStatus, challengersLeft: (this.state.challengersLeft - 1) };
            this.setState(state);
        }
    }

  render() {
    return (
      <div> 
          <Row>
              <h4> {this.state.challenge} </h4>
          </Row>

          <Row>
              <Button bsStyle = "positive" className = "vote_button" onPress={() => this.handleButton(true)}>  Yes </Button>
              <Button  bsStyle = "negative" className = "vote_button" onPress={() => this.handleButton(false)}>   No </Button>
          </Row>
      </div>
    )
  }
}
  

class ChallengeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { chalengeinputvalue: "", playerinputvalue: "" };
    

    this.handleChallengeChange = this.handleChallengeChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getNumValidationState() {
    if (this.state.playerinputvalue.length !== 0) {
      let number = parseInt(this.state.playerinputvalue)
      if  (number) return 'success';
      else return 'error'
    }
  }

  getChallengeValidationState() {
    if (this.state.chalengeinputvalue.length !== 0) {
      return 'success';
    }
  }
  

  handleChallengeChange(e) {
    let state = { chalengeinputvalue: e.target.value,  playerinputvalue: this.state.playerinputvalue}
    this.setState(state);
  }

  handleNumberChange(e) {
    let state = { chalengeinputvalue: this.state.chalengeinputvalue,  playerinputvalue:  e.target.value}
    this.setState(state);  }

  handleSubmit() {
    if (this.getChallengeValidationState() === 'success' && this.getNumValidationState() === 'success')
    this.props.onSubmit(this.state.value, this.state.numplayers)
  }

  render() {
    return (
        <Form hor className="Form">
          <FormGroup
            controlId="challengeFormID"
            validationState={this.getChallengeValidationState()}

          >
            <Col md={6} sm={6}> 
              <ControlLabel>I Dare you to </ControlLabel>
            </Col>
            <Col md={6} sm={6}> 
              <FormControl
                type="text"
                value={this.state.chalengeinputvalue}
                placeholder="go for a midnight swim"
                onChange={this.handleChallengeChange}
                text
              />
            </Col>
          </FormGroup>

          <FormGroup
            controlId="challengeFormID"
            validationState={this.getNumValidationState()}
          >
            <Col md= {6} sm={6}>
              <ControlLabel>How many are you? </ControlLabel>
            </Col>
            <Col md={6} sm={6}> 
              <InputGroup>
                <FormControl
                  type="text"
                  value={this.state.playerinputvalue}
                  placeholder="Number of players"
                  onChange={this.handleNumberChange}
                />
                <InputGroup.Addon>
                  <Glyphicon glyph="user" />
                </InputGroup.Addon>
              </InputGroup>
            </Col>
          </FormGroup>

          <FormGroup>
              <Button center type="submit">
                  Challenge!
              </Button>
          </FormGroup>
        </Form>
    );
  }
}

class Challenge extends React.Component {
    constructor(props){
      super(props)
      this.state = {inputMode: true}
      this.votesIn = this.votesIn.bind(this);
      this.handleclick = this.handleclick.bind(this);
      this.submit = this.submit.bind(this);
    }

    votesIn(success) {
        let state = {inputMode: true};
        this.setState(state);
        if (success) {
            this.dialog.showAlert("Success! Everyone agrees. Go for it!")
        } 

        else {
            this.dialog.showAlert('The vote did not pass! It is all or nothing!')
        }   
    }

    submit(challengeText, challengeNumb) {
        let state = {inputMode: false};
        this.setState(state);
    }

    handleclick() {
      this.dialog.showAlert('Hello Dialog!')
    }

  render() {
    return (
      <div>
        <Dialog ref={(el) => { this.dialog = el }} />

        <Col mdOffset={3} md = {6} smOffset={1} sm = {10}>  
          <h2> Challenge </h2>
          <ChallengeForm onSubmit={this.submit}/>
          <Collapse in={this.state.inputMode}>
          <ChallengeButton challenge = "This is some generic text" numplayers = {10}/>
          </Collapse>
        </Col>
      </div>
    );
  }
}

export default Challenge;
