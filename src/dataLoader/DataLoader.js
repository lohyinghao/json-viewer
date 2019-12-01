import React, { Fragment, Component } from 'react';
import './DataLoader.css';
import { MyContext } from './../App';

class DataLoader extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Fragment>
            <a>Input Json</a>
            <form>
              <textarea
                value={context.state.json}
                onChange={e => context.handleChange(e)}
              />
            </form>
            <button onClick={context.formatJson}>Format</button>
          </Fragment>
        )}
      </MyContext.Consumer>
    );
  }
}

export default DataLoader;
