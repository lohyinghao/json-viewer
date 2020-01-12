import React, { Component, Fragment } from 'react';
import { ToolTipController, Select } from 'react-tooltip-controller';

class KeyValueHolder extends Component {
  copy(value) {
    let dummy = document.createElement('textarea');
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea".
    dummy.value = value;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
  }
  render() {
    let value = this.props.value;
    const key = this.props.name;
    return (
      <Fragment>
        {' '}
        <ToolTipController
          detect='click'
          closeOnClick={false}
          timeOut={1000}
          offsetX='centre'
          offsetY={-40}
        >
          <Select>
            <a className='text' onClick={() => this.copy(key)}>
              {key}
            </a>
          </Select>
          <span class='tooltiptext'>Copied</span>
        </ToolTipController>
        {value !== undefined ? (
          <Fragment>
            <span>{` : `}</span>
            <ToolTipController
              detect='click'
              closeOnClick={false}
              timeOut={1000}
              offsetX='centre'
              offsetY={-40}
            >
              <Select>
                <a
                  className='text'
                  onClick={() => this.copy(JSON.stringify(value))}
                >
                  {JSON.stringify(value)}
                </a>
              </Select>
              <span class='tooltiptext'>Copied</span>
            </ToolTipController>
          </Fragment>
        ) : null}
      </Fragment>
    );
  }
}

export default KeyValueHolder;
