import React from 'react';

import { Row, Col, Image, Button } from 'react-bootstrap';

import { Form, FormControl, FormGroup, formBasicText, HelpBlock, ControlLabel} from 'react-bootstrap'

import { Link } from 'react-router-dom';


class ChallengeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
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
      <Form inline>
        <FormGroup
          controlId="challengeFormID"
          validationState={this.getValidationState()}
        >
          <ControlLabel>I Dare you to </ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="some challenge"
            onChange={this.handleChange}
          />
           <Button type="submit">
            Submit
            </Button>
          <FormControl.Feedback />

        </FormGroup>
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
