import React from 'react';
import './App.css';
import CardList from './../../Containers/CardList/CardList';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;