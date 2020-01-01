import React, { Component } from 'react';
import { MyContext } from '../App';

class JsonProvider extends Component {
  constructor() {
    super();

    this.state = {
      inputMode: true,
      json: `{"threw":[{"course":472970619.69472694,"river":-1970074456.5413733,"cow":"grass"},true,"exactly"],"nearer":"signal","has":true}` //`{"0": "Enter your json here"}`
    };

    this.updateJson = e => {
      this.setState({
        json: e.target.value
      });
    };

    this.formatJson = () => {
      try {
        this.setState({
          json: JSON.stringify(JSON.parse(this.state.json), null, 2)
        });
      } catch (err) {
        alert('Invalid JSON');
      }
    };

    this.removeWhiteSpacesJson = () => {
      try {
        this.setState({
          json: JSON.stringify(JSON.parse(this.state.json))
        });
      } catch (err) {
        alert('Invalid JSON');
      }
    };

    this.clear = () => {
      this.setState({
        ...this.state,
        json: ''
      });
    };

    this.goToInputMode = () => {
      this.setState({
        ...this.state,
        inputMode: true
      });
    };

    this.viewJson = () => {
      try {
        this.setState({
          ...this.state,
          jsonInViewer: JSON.parse(this.state.json),
          inputMode: false
        });
      } catch (err) {
        alert('Invalid JSON');
      }
    };
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          updateJson: this.updateJson,
          formatJson: this.formatJson,
          removeWhiteSpacesJson: this.removeWhiteSpacesJson,
          viewJson: this.viewJson,
          goToInputMode: this.goToInputMode,
          clear: this.clear
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default JsonProvider;
