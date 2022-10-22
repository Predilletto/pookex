import "./board.css";

import React from "react";

import Letter from "./Letter";

const Board = ({ correctPoke }) => {
  return (
    <div className="board">
      {" "}
      <div className="row">
        {correctPoke.split("").map((char, index) => {
          return <Letter letterPos={index} attemptVal={0} />;
        })}
      </div>
      <div className="row">
        {correctPoke.split("").map((char, index) => {
          return <Letter letterPos={index} attemptVal={1} />;
        })}
      </div>
      <div className="row">
        {correctPoke.split("").map((char, index) => {
          return <Letter letterPos={index} attemptVal={2} />;
        })}
      </div>
      <div className="row">
        {correctPoke.split("").map((char, index) => {
          return <Letter letterPos={index} attemptVal={3} />;
        })}
      </div>
      <div className="row">
        {correctPoke.split("").map((char, index) => {
          return <Letter letterPos={index} attemptVal={4} />;
        })}
      </div>
      <div className="row">
        {correctPoke.split("").map((char, index) => {
          return <Letter letterPos={index} attemptVal={5} />;
        })}
      </div>
    </div>
  );
};

export default Board;
