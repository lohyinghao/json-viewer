import React, { Fragment, Component } from 'react';
import { MyContext } from '../App';

class Controls extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <nav>
            <div className='nav-wrapper teal lighten-2'>
              <a href='#' className='brand-logo right json-viewer-logo'>
                Json Viewer
              </a>
              <ul id='nav-mobile' className='left hide-on-med-and-down'>
                <li>
                  <a onClick={context.viewJson}>Viewer</a>
                </li>
                <li>
                  <a onClick={context.goToInputMode}>Data</a>
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
