import React from 'react';
import './App.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import USERS from './../../constants';
import { getUser } from './../../utils'

function App() {
  return (
    <div className="App">
      <h1>Hi</h1>
      <Header user={getUser('maks', USERS)} />
      <Footer />
    </div>
  );
}

export default App;