import React from 'react';
import './Dice.css'



const Dice = () => {
  return (
  <div>
    <div className="container">

        <div className="row">
            <div className="col-12">
                <section className="player player--0 player--active">
                    <div className="title">
                        <button className="service show-nodal">?</button>
                        <h2 className="name" id="name--0">Player 1</h2>
                    </div>
                    <p className="score" id="score--0">43</p>
                    <div className="current">
                        <p className="current-label">Current</p>
                        <p className="current-score" id="current--0">0</p>   
                    </div>
                </section>
            </div>
            <div className="col-6">
                <p className="name--dice">Tira el Dado!</p>
                <img src="/img/dice-5.png" alt="Playing dice" className="dice" />
            </div>
            <div className="col-6">
                <section className="middle">
                    <div className="row">
                        <div className="col-4">
                            <button className="btn btn--new"> <p>🔄</p></button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn--roll disable-dbl-tap-zoom"> <p>🎲</p></button>
                        </div>
                        <div className="col-4">
                            <button className="btn btn--hold"> <p>📥</p></button>
                        </div>
                    </div>

                </section>
            </div>
            <div className="col-12">
                <section className="player player--1">
                    <h2 className="name" id="name--1">Player 2</h2>
                    <p className="score" id="score--1">24</p>
                    <div className="current">
                        <p className="current-label">Current</p>
                        <p className="current-score" id="current--1">0</p>
                    </div>
                </section>
            </div>
        </div>


    </div>
  </div>
)
};

export default Dice;
