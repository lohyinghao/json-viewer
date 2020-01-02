import React, { Component } from 'react';
import CopyOnClickHolder from './CopyOnClickHolder';
import './DataViewer.css';

class Jackson extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  init() {
    let value = this.props.value;
    const key = this.props.name;
    if (key) {
      if (
        value &&
        (value.constructor === Object || value.constructor === Array)
      ) {
        return (
          <div key={key} className='child'>
            <a
              className={
                this.state.visible
                  ? 'mdi mdi-minus-box-outline mdi-24px box'
                  : 'mdi mdi-plus-box-outline mdi-24px box'
              }
              onClick={this.toggleVisibility}
            ></a>
            <span
              className={
                value.constructor === Array
                  ? 'mdi mdi-code-brackets mdi-24px brackets'
                  : 'mdi mdi-code-braces mdi-24px brackets'
              }
            ></span>
            <CopyOnClickHolder name={key}></CopyOnClickHolder>
            {this.state.visible ? (
              <div className='expanded'>
                {Object.entries(this.props.value).map(([key, value]) => (
                  <Jackson key={key} name={key} value={value} />
                ))}
              </div>
            ) : null}
          </div>
        );
      } else {
        return (
          <div key={key} className='child'>
            <a
              className={
                (value || value === false || value === ''
                  ? value.constructor === Boolean
                    ? 'boolean'
                    : value.constructor === Number
                    ? 'number'
                    : 'string'
                  : 'null') + ' mdi mdi-checkbox-blank simple'
              }
            ></a>
            <CopyOnClickHolder name={key} value={value}></CopyOnClickHolder>
          </div>
        );
      }
    }
  }

  render() {
    return <div className='jackson'>{this.init()}</div>;
  }
}

export default Jackson;
