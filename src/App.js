import React from 'react';
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';

import Home from './components/Home/Home'
import TicTacToe from './components/TicTacToe/TicTacToe'
import Navbar from './components/Navbar/Navbar'
import Dice from './components/Dice/Dice';
import Blackjack from './components/Blackjack/Blackjack';

import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" index element={<Home/>}/>
            <Route path="tictactoe" element={<TicTacToe/>}/>
            <Route path="blackjack" element={<Blackjack/>}/>
        </Routes>

    </BrowserRouter>
  );
}

export default App;
