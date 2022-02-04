import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'


const Home = () => {
  return( 
    <div className='container'>
        <section className='gamesBtnSection'>
          <Link to="tictactoe"><button className='gamesBtn'>Tic Tac Toe</button></Link> 
          <Link to="tictactoe"><button className='gamesBtn'>Daze Dice</button></Link> 
          <Link to="tictactoe"><button className='gamesBtn'>21 Blackjack</button></Link> 
        </section>
    </div>
)};

export default Home;
