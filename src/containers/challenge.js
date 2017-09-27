import React from 'react';

import { Row, Col, Image, Button } from 'react-bootstrap';

import { Form, FormControl, FormGroup, formBasicText, HelpBlock, ControlLabel, InputGroup, Glyphicon} from 'react-bootstrap'

import { Link } from 'react-router-dom';


class ChallengeForm extends React.Component {
  constructor(props) {
    super(props)
    if (props.value) {
        this.state = {value: props.value};

    }
    else {
        this.state = {value: ''};
    }

    this.handleChange = this.handleChange.bind(this)
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup
          controlId="challengeFormID"
          validationState={this.getValidationState()}
        >
          <ControlLabel>I Dare you to </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="go for a midnight swim"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
    <FormGroup
                      controlId="challengeFormID"
          validationState={this.getValidationState()}
        >
    <ControlLabel>I Dare you to </ControlLabel>
      <InputGroup>
            <FormControl
                type="text"
                value={this.state.value}
                placeholder="Number of players"
                onChange={this.handleChange}
            />
            <InputGroup.Addon>
                <Glyphicon glyph="user" />
            </InputGroup.Addon>

        </InputGroup>
    
        </FormGroup>
         <Button type="submit">
            Submit
         </Button>
      </Form>
    );
  }
}

class Challenge extends React.Component {
  render() {
    return (
      <div>
        <h2> Challenge </h2>
        <ChallengeForm />
      </div>
    );
  }
}

export default Challenge;
