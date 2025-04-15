import React from "react";

type HangmanWordProps = {
  guessedLetters: Array<string>,
  wordToGuess: string,
  reveal?: boolean,
}

const HangmanWord = (props:HangmanWordProps) => {
  const {wordToGuess,guessedLetters,reveal=false} = props;
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        fontWeight: "bold",
        fontFamily: "monospace",
        textTransform: "uppercase"
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          key={index}
          style={{
            borderBottom: ".1em solid black",
          }}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal
                ? "visible"
                : "hidden",
                color: !guessedLetters.includes(letter) && reveal
                ? "red"
                : "green",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWord;
