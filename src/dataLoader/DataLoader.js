import React, { Fragment, Component } from 'react';
import './DataLoader.css';
import { MyContext } from '../App';

class DataLoader extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Fragment>
            <div
              className='row'
              style={{ display: context.state.inputMode ? 'block' : 'none' }}
            >
              <form className='col s12'>
                <textarea
                  className='card-panel'
                  value={context.state.json}
                  onChange={e => context.updateJson(e)}
                />
              </form>
              <div className='col s12 right-align'>
                <a
                  class='waves-effect waves-light btn-small teal lighten-2'
                  onClick={context.clear}
                >
                  Clear
                </a>
                <a
                  class='waves-effect waves-light btn-small teal lighten-2'
                  onClick={context.formatJson}
                >
                  Format Json
                </a>
                <a
                  class='waves-effect waves-light btn-small teal lighten-2'
                  onClick={context.removeWhiteSpacesJson}
                >
                  Remove White Spaces
                </a>
              </div>
            </div>
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default DataLoader;
