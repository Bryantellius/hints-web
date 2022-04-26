import { useState, useEffect } from "react";
import { generateBoardLetters } from "../utils/board";

const Board = ({ value }) => {
  let [letters, setLetters] = useState(generateBoardLetters(30));

  return (
    <div className="m-w-500 mx-auto text-center flex justify-center flex-wrap">
      {letters
        .replace(/ |,|\./g, "")
        .split("")
        .map((char, index) => (
          <div
            key={char + index}
            className="flex justify-center items-center border border-black-100 board-space"
          >
            <span className={value.toUpperCase().includes(char.toUpperCase()) ? "blur-sm" : ""}>{char}</span>
          </div>
        ))}
    </div>
  );
};

export default Board;
