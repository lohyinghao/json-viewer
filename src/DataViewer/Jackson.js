import React, { Component } from 'react';
import './DataViewer.css';

class Jackson extends Component {
  state = { visible: false };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  init() {
    const value = this.props.value;
    const key = this.props.name;
    if (this.props.value && this.props.name) {
      if (
        value.constructor === Boolean ||
        value.constructor === Number ||
        value.constructor === String
      ) {
        return (
          <div key={key} className='child'>
            <a
              className={
                (value.constructor === Boolean
                  ? 'boolean'
                  : value.constructor === Number
                  ? 'number'
                  : 'string') + ' mdi mdi-checkbox-blank simple'
              }
            ></a>
            <span>{` ${key} : `}</span>
            <span>{`${value}`}</span>
          </div>
        );
      } else {
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
            <span>{` ${key}`}</span>

            {this.state.visible ? (
              <div className='expanded'>
                {Object.entries(this.props.value).map(([key, value]) => (
                  <Jackson key={key} name={key} value={value} />
                ))}
              </div>
            ) : null}
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
