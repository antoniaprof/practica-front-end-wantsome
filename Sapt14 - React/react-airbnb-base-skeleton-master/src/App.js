import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import List from './components/List/List';
import Tabs from './components/Tabs/Tabs';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <Tabs />
      <main className='container'>
      <List />
      </main>
      <Footer />
    </div>
  );
}

export default App;
