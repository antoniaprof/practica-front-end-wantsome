import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import List from './components/List/List';

function App() {
  return (
    <div>
      <Header />
      <nav>tabs</nav>
      <main className='container'>
      <List />
      </main>

      <footer>footer</footer>
    </div>
  );
}

export default App;
