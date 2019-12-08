import React, { Fragment, Component } from 'react';
import './DataViewer.css';

class Jackson extends Component {
  constructor(props) {
    super(props);
  }

  state = { visible: true };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  init() {
    if (this.props.value) {
      return Object.entries(this.props.value).map(([key, value]) => {
        // key is to over the wierd warning of "Each child in a list should have a unique 'key' prop."
        if (value) {
          if (value.constructor === Array || value.constructor === Object) {
            return (
              <div key={key} className='child'>
                <a
                  className={
                    this.state.visible
                      ? 'mdi mdi-plus-box-outline mdi-24px box'
                      : 'mdi mdi-minus-box-outline mdi-24px box'
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
                <span className='brackets'>{` ${key}`}</span>

                {!this.state.visible ? (
                  <Fragment>
                    <Jackson value={value} />
                  </Fragment>
                ) : null}
              </div>
            );
          }
          if (
            value.constructor === Boolean ||
            value.constructor === Number ||
            value.constructor === String
          ) {
            return (
              <div key={key} className='child'>
                <span className='simple'>{` ${key} : `}</span>
                <span
                  className={
                    value.constructor === Boolean
                      ? 'boolean'
                      : value.constructor === Number
                      ? 'number'
                      : 'string'
                  }
                >{`${value}`}</span>
              </div>
            );
          }
        }
      });
    }
  }

  render() {
    return <div className='jackson'>{this.init()}</div>;
  }
}

export default Jackson;
