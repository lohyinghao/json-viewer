import React, { Component } from 'react';
import './App.css';
import DataLoader from './DataLoader/DataLoader';
import DataViewer from './DataViewer/DataViewer';
import Controls from './Controls/Control';
import JsonProvider from './Provider/JsonProvider';

export const MyContext = React.createContext();

class App extends Component {
  render() {
    return (
      <JsonProvider>
        <div className='row container'>
          <div className='col s12'>
            <Controls />
          </div>
          <div className='col s12'>
            <DataViewer />
          </div>
          <div className='col s12'>
            <DataLoader />
          </div>
        </div>
      </JsonProvider>
    );
  }
}

export default App;
