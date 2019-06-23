import React, { useState } from 'react';
import './App.css';

const App = () => {
  // Make a new state for just one word,
  // It should start as just an empty string
  const [word, setWord] = useState('');

  // Make a new state for a list of words,
  // It should start as an empty array
  const [wordList, setWordList] = useState([])

  const saveHandler = function() {
    console.log('saving')
    // Make a new array with our current word
    // then concatenate (add) the existin wordList
    // to the end of it
    const words = [word].concat(wordList)

    // Update the state of the wordList to reflect
    // our new additions
    setWordList(words);
  }
  const cancelHandler = function() {
    console.log('cancel')
  }
  const changeHandler = function(event) {
    console.log(event.target.value)
    // This gets the current text value
    // from the input box
    const text = event.target.value;

    // Update the state of the 'word' to use this new text
    setWord(text);
  }

  return (
    <div>
      <nav className="header">
        <button
          className="button green"
          onClick={saveHandler}
        >
          save
        </button>

        <input
          type="text"
          placeholder="a new french word"
          onChange={changeHandler}
        >
        </input>

        <button
          className="button red"
          onClick={cancelHandler}>
          cancel
        </button>
      </nav>
      <h1>Current word: {word}</h1>
      <h2>List of words:</h2>
      {/*
        Unordered List (UL)
      */}
      <ul>
        {
          wordList.map(function(myWord) {
            return (<li key={myWord}>{myWord}</li>)
          })
        }
      </ul>
    </div>
  );

}

export default App;
