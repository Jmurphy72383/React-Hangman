import React, { Component } from 'react';
import { getWord } from '../helpers/words';
import img0 from "../img/0.jpg";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import './Hangman.css';

class Hangman extends Component {

    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6]
    };

    state = {
        numWrong: 0,
        guessed: new Set(" "),
        answer: getWord()
    }

    answerWord = () => {
        return this.state.answer
        .split("")
        .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
    }

    createButtons = () => {
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map(ltr => (
            <button
            key={ltr}
            value={ltr}
            onClick={this.handleGuess}
            disabled={this.state.guessed.has(ltr)}
            >
            {ltr}
            </button>));
    }

    handleGuess = (event) => {
        let guess = event.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(guess),
            numWrong: st.numWrong + (st.answer.includes(guess) ? 0 : 1)
          }));
        // this.setState({
        //     guessed: guessed.add(guess),
        //     numWrong: 
        // })
    }

    handleRestart = () => {
        this.setState({
            numWrong: 0,
            guessed: new Set(" "),
            answer: getWord()
        })
    }

    render() {
        let imgSrc = this.props.images[this.state.numWrong];
        let altTxt = `${this.state.numWrong}/6`
        return(
            <div>
                <h1>Hangman</h1>
                <img src={imgSrc} alt={altTxt}></img>
                <p>Wrong Guesses: {this.state.numWrong}</p>
                <p className="Picked-word">{this.answerWord()}</p>
                <p className="Hangman-buttons">{this.createButtons()}</p>
                <button className="Btn-restart" onClick={this.handleRestart}>RESTART</button>
            </div>
        )
    }
}

export default Hangman;
