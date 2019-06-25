import React from 'react';
import './App.css';

import Header from './components/header';
import Form from './components/form';
import History from './components/history';
import Output from './components/output';
import Footer from './components/footer';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      url:[],
    };
  }

  //an arrow function binds to contextual this
  //a normal function will not
  shareData = (data) => {
    // console.log('this is data', data);
    let arr = this.state.url.concat(data);
    this.setState({url: arr});
   
    console.log('this is this.state.url', this.state.url);
    
  }

  render() {
    return (
    <>
    <Header/>
    {/*added a share property to the Form component*/}
    <Form share={this.shareData}/>
    <History urlData={this.state.url}/>
    <Output/>
    <Footer/>
    </>
    );
  }
}

export default App;
