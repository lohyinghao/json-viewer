import React, { Component } from 'react';
import { MyContext } from '../App';
import Jackson from './Jackson';

class DataViewer extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <div
            className='row viewerMargin'
            style={{ display: !context.state.inputMode ? 'block' : 'none' }}
          >
            <div className='col s12'>
              <div className='card-panel'>
                <Jackson name='JSON' value={context.state.jsonInViewer} />
              </div>
            </div>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default DataViewer;
