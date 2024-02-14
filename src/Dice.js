import React from "react";
import withStyles from "react-jss";

const styles = {
  diceRect: {
    cursor: "pointer",
    willChange: "transform",
  },
  die: {
    cursor: "pointer",
    willChange: "transform",
  },
};

const Dice = ({ getQuote, randomRoll, randomRoll2 }) => {
  let randomDie = randomRoll;
  let randomDie2 = randomRoll2;

  let position = "";

  const circles = (position) => {
    const cx1 = 8.5;
    const cx2 = 14.5;
    const cx3 = 20.5;
    const cy1 = 22.5;
    const cy2 = 28.5;
    const cy3 = 34.5;
    const die1 = (
      <circle
        className="diceCirc"
        cx={position === "left" ? cx2 : cx2 + 30}
        cy={position === "left" ? cy2 : cy2 - 15}
        r="2.5"
        fill="white"
      />
    );
    const die2 = (
      <>
        <circle
          className="diceCirc"
          cx={position === "left" ? cx1 : cx1 + 30}
          cy={position === "left" ? cy3 : cy3 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx3 : cx3 + 30}
          cy={position === "left" ? cy1 : cy1 - 15}
          r="2.5"
          fill="white"
        />
      </>
    );
    const die3 = (
      <>
        <circle
          className="diceCirc"
          cx={position === "left" ? cx1 : cx1 + 30}
          cy={position === "left" ? cy3 : cy3 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx2 : cx2 + 30}
          cy={position === "left" ? cy2 : cy2 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx3 : cx3 + 30}
          cy={position === "left" ? cy1 : cy1 - 15}
          r="2.5"
          fill="white"
        />
      </>
    );
    const die4 = (
      <>
        <circle
          className="diceCirc"
          cx={position === "left" ? cx1 : cx1 + 30}
          cy={position === "left" ? cy3 : cy3 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx1 : cx1 + 30}
          cy={position === "left" ? cy1 : cy1 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx3 : cx3 + 30}
          cy={position === "left" ? cy3 : cy3 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx3 : cx3 + 30}
          cy={position === "left" ? cy1 : cy1 - 15}
          r="2.5"
          fill="white"
        />
      </>
    );
    const die5 = (
      <>
        <circle
          className="diceCirc"
          cx={position === "left" ? cx1 : cx1 + 30}
          cy={position === "left" ? cy3 : cy3 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx1 : cx1 + 30}
          cy={position === "left" ? cy1 : cy1 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx3 : cx3 + 30}
          cy={position === "left" ? cy3 : cy3 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx3 : cx3 + 30}
          cy={position === "left" ? cy1 : cy1 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx2 : cx2 + 30}
          cy={position === "left" ? cy2 : cy2 - 15}
          r="2.5"
          fill="white"
        />
      </>
    );
    const die6 = (
      <>
        <circle
          className="diceCirc"
          cx={position === "left" ? cx1 : cx1 + 30}
          cy={position === "left" ? cy3 : cy3 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx1 : cx1 + 30}
          cy={position === "left" ? cy1 : cy1 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx3 : cx3 + 30}
          cy={position === "left" ? cy3 : cy3 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx3 : cx3 + 30}
          cy={position === "left" ? cy1 : cy1 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx1 : cx1 + 30}
          cy={position === "left" ? cy2 : cy2 - 15}
          r="2.5"
          fill="white"
        />
        <circle
          className="diceCirc"
          cx={position === "left" ? cx3 : cx3 + 30}
          cy={position === "left" ? cy2 : cy2 - 15}
          r="2.5"
          fill="white"
        />
      </>
    );

    if (position === "left")
      return randomDie === 0
        ? die1
        : randomDie === 1
        ? die2
        : randomDie === 2
        ? die3
        : randomDie === 3
        ? die4
        : randomDie === 4
        ? die5
        : randomDie === 5
        ? die6
        : null;
    else if (position === "right")
      return randomDie2 === 0
        ? die1
        : randomDie2 === 1
        ? die2
        : randomDie2 === 2
        ? die3
        : randomDie2 === 3
        ? die4
        : randomDie2 === 4
        ? die5
        : randomDie2 === 5
        ? die6
        : null;
  };

  return (
    <svg
      width="54"
      height="43"
      viewBox="0 0 54 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      style={{ cursor: "pointer" }}
    >
      <g
        className="die"
        onClick={getQuote}
        style={{ cursor: "pointer" }}
        pointerEvents={"all"}
      >
        <rect
          x="0.5"
          y="14.5"
          width="28"
          height="28"
          rx="3.5"
          fill="black"
          stroke="transparent"
          className="diceRect"
          id="diceRect"
        />
        {circles((position = "left"))}
      </g>
      <g
        className="die"
        onClick={getQuote}
        style={{ cursor: "pointer" }}
        pointerEvents={"all"}
      >
        <rect
          x="30.5"
          y="-0.5"
          width="28"
          height="28"
          rx="3.5"
          fill="black"
          stroke="transparent"
          className="diceRect"
          id="diceRect"
        />
        {circles((position = "right"))}
      </g>
    </svg>
  );
};

export default withStyles(styles)(Dice);
