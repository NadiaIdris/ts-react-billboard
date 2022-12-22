import React, { useState } from "react";
import styled from "styled-components";

// ------- Some CSS styling using styled-components -------
const StyledInput = styled.input`
  border: 2px solid rgba(135, 0, 116, 1);
  border-radius: 100px;
  height: 20px;
  padding: 7px 10px;
  &:focus, &:active {
    outline: none;
  }
  &:-internal-autofill-selected {
    background-color: red;
    background: blue;
  }
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 100px;
  padding: 7px 13px;
  margin: 0 10px;
  background-color: purple;
  color: white;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  &:hover {
    background-color: rgba(135, 0, 116, .9);
  }
  &:active {
    background-color: rgba(135, 0, 116, 1);
  }
  box-shadow: 2px 3px 8px 1px rgba(105,105,105, 0.1),  0 1px 8px 1px rgba(0, 0, 0, .2);
`
// -------------


function App() {
  const [textToPrint, setTextToPrint] = useState("");
  const [lettersToPrint, setLettersToPrint] = useState<string[]>([]);

  // How to type event argument: https://stackoverflow.com/questions/42081549/typescript-react-event-types
  const saveInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextToPrint(event.target.value);
  };

  // printText implemented using setTimeout.
  const printText = () => {
    // On button click, grab the textToPrint value and queue all the letters wrapped in a setTimeout async function to be printed on the screen.
    const textToPrintArr = textToPrint.split("");

    textToPrintArr.forEach((letter, i) => {
      setTimeout(() => {
        lettersToPrint.push(letter);
        setLettersToPrint([...lettersToPrint]);
      }, i * 1000);
    });
  };

  // printText implemented using setInterval.

  console.log("lettersToPrint outside of printText() ", lettersToPrint);

  return (
    <>
      <label htmlFor="b6illboard-text">Billboard text: </label>
      <StyledInput
        onChange={(event) => saveInput(event)}
        type="text"
        id="billboard-text"
        name="billboard-text"
      />

      <StyledButton onClick={() => printText()}>Print text</StyledButton>

      <div id="billboard">{lettersToPrint}</div>
    </>
  );
}

export default App;
