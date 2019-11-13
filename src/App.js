import React, {Component} from 'react';
import logo from './logo.svg';
import GridView from './components/GridView';
import './App.css';
import ClientPage from './ClientPage';
import {getApps} from './api/api';
class App extends Component {
    constructor(props){
      super(props);
      this.state={
        apps:[]
      };
      getApps().then(_apps=>this.setState({apps:_apps}));
      //debugger;
    }
    


  render(){
    
    //debugger;
    return (
      this.state.apps.length > 0 ? 
      (
        <div className="App">
          <ClientPage apps={this.state.apps}/>
        </div>
      ):
      <div>Loading...</div>

      
    );
  }
}

export default App;
