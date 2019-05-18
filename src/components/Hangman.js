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

    render() {
        let imgSrc = this.props.images[this.state.numWrong];
        let altTxt = `${this.state.numWrong}/6`
        return(
            <div>
                <h1>Hangman</h1>
                <img src={imgSrc} alt={altTxt}></img>
                <p>Wrong Guesses: {this.state.numWrong}</p>
                <p className="Picked-word">{this.answerWord()}</p>
            </div>
        )
    }
}

export default Hangman;
