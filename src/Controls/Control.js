import React, { Fragment, Component } from 'react';
import { MyContext } from '../App';

class Controls extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <nav>
            <div className='nav-wrapper teal lighten-2'>
              <a className='brand-logo right json-viewer-logo hide-on-small-only'>
                Json Viewer
              </a>
              <ul id='nav-mobile' className='left hide-on-small-only'>
                <li>
                  <a onClick={context.viewJson}>Viewer</a>
                </li>
                <li>
                  <a onClick={context.goToInputMode}>Data</a>
                </li>
              </ul>
              <ul id='nav-mobile' className='left hide-on-med-and-up'>
                <li>
                  <a onClick={context.viewJson} className='mdi mdi-json'></a>
                </li>
                <li>
                  <a
                    onClick={context.goToInputMode}
                    className='mdi mdi-textbox'
                  ></a>
                </li>
              </ul>
            </div>
          </nav>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Controls;
