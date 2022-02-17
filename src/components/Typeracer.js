import React, { useRef, useEffect } from "react";
import Button from "./Button";

const Typeracer = (props) => {
  const {
    newWord,
    inputValue,
    setInputValue,
    disabled,
    time,
    animation,
    handleInput,
    handleStart,
  } = props;

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="typeRacer">
      <div className="wordOutput">
        <p>{newWord}</p>
      </div>
      <div className="time">
        <p style={{ animation: animation !== null ? animation : "" }}>{time}</p>
      </div>
      <div className="wordValues">
        <input
          type="text"
          ref={inputRef}
          disabled={disabled && disabled}
          onKeyPress={(e) => handleInput(e)}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={disabled ? "" : "Start typing..."}
        />
        <Button handleStart={handleStart} disabled={disabled} />
      </div>
    </div>
  );
};

export default Typeracer;
