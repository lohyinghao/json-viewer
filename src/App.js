import React, { Component } from 'react';
import './App.css';
import DataLoader from './dataLoader/DataLoader';

export const MyContext = React.createContext();

class JsonProvider extends Component {
  constructor() {
    super();

    this.state = {
      json:
        '{"zdtiic":["JsZbxHqM",-1933451531,true,[false,false,-400544804.8848603,"bTJ9sonw","c"]],"ujnjsnjpwra":[[329398297.34234834]],"eslygpyawkgs":351427425.0266722,"puyqhywhfh":false,"wltdqoduhjex":1175683688.9913287}'
    };

    this.handleChange = e => {
      this.setState({
        json: e.target.value
      });
    };

    this.formatJson = () => {
      //e.preventDefault();
      this.setState({
        json: JSON.stringify(JSON.parse(this.state.json), null, 2)
      });
    };
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          handleChange: this.handleChange,
          formatJson: this.formatJson
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <JsonProvider>
        <div className='App'>
          <DataLoader />
        </div>
      </JsonProvider>
    );
  }
}

export default App;
