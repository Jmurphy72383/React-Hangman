import React, { Component } from 'react';
import { getWord } from '../helpers/words';

class Hangman extends Component {

    static defaultProps = {
        maxWrong: 6,
        //images: [img0, img1, img2, img3, img4, img5, img6]
    };

    state = {
        numWrong: 0,
        guessed: new Set(),
        answer: getWord()
    }

    render() {
        return(
            <div>Hangman</div>
        )
    }
}

export default Hangman;
