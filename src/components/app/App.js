import React, {Component} from 'react';
import Router from '../Router';
import Navbar from '../common/navbar/Navbar';
import Footer from '../common/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar/>
        </header>
        <Router/>
        <Footer/>
      </div>
    );
  }
}

export default App;
