import { useState } from "react";

const WordToGuess = ({ attempt, rightWord }) => {
  const [code, setCode] = useState(Array(5).fill(""));

  const regexp = /[а-яё]/i;

  const handleChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleKeyUp = (index, event) => {
    if (event.key !== "Backspace" && index < 4 + attempt * 10) {
      document.getElementById(`digit ${index + 1}`).focus();
    }
    if (event.key === "Backspace" && index > attempt * 10) {
      document.getElementById(`digit ${index - 1}`).focus();
    }
  };

  //   const handleKeyDown = (index, event) => {
  //     if (!(regexp.exec(event.key))) {}
  //   }

  const handleSubmit = (e) => {
    code.map((letter, index) =>
      letter.toLowerCase() === rightWord[index]
        ? (document.getElementById(
            `digit ${index + attempt * 10}`
          ).style.backgroundColor = "rgb(132 204 22)")
        : rightWord.includes(letter.toLowerCase())
        ? (document.getElementById(
            `digit ${index + attempt * 10}`
          ).style.backgroundColor = "rgb(252 211 77)")
        : (document.getElementById(
            `digit ${index + attempt * 10}`
          ).style.backgroundColor = "gray")
    );
    for (let o = 0; o < 5; o++) {
      document
        .getElementById(`digit ${o + attempt * 10}`)
        .setAttribute("disabled", true);
    }
    // eslint-disable-next-line no-unused-expressions
    attempt < 5
      ? document.getElementById(`digit ${++attempt * 10}`).focus()
      : "";
    e.preventDefault();
  };

  return (
    <>
      <form
        className=" w-fit gap-4 h-full flex justify-around content-center items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        {code.map((digit, index) => (
          <div className="w-16 h-16 flex justify-center items-center content-center border border-1 border-cyan-500 p-1 rounded-lg">
            <input
              type="text"
              maxLength={1}
              required
              className="h-full w-full rounded-lg text-center align-middle bg-slate-950 font-medium text-2xl"
              autoFocus
              id={`digit ${index + attempt * 10}`}
              key={index}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyUp={(e) => handleKeyUp(index + attempt * 10, e)}
              //   onKeyDown={(e) => handleKeyDown(index, e)
            />
          </div>
        ))}
        <button type="sumbit"> Submit </button>
      </form>
    </>
  );
};

export default WordToGuess;
