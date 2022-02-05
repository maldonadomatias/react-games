import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
  return( 
    <div className='container'>
        <div className='title'>
          CHOOSE A GAME
        </div>
        <section className='gamesBtnSection'>
          <Link to="tictactoe"><button className='gamesBtn'>Tic Tac Toe</button></Link> 
          <Link to="snake"><button className='gamesBtn'>Snake</button></Link> 
          <Link to="blackjack"><button className='gamesBtn'>21 Blackjack</button></Link> 
        </section>
    </div>
)};

export default Home;
