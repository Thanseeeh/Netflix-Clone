import './App.css';
import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { Originals, Action, Trending, ComedyMovies } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost urls={Originals} title="Netflix Originals" />
      <RowPost urls={Action} title="Action" isSmall />
      <RowPost urls={Trending} title="Trending" isSmall />
      <RowPost urls={ComedyMovies} title="ComedyMovies" isSmall />
    </div>
  );
}

export default App;
