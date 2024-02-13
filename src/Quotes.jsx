import React, { useState, useEffect, useRef } from "react";
import withStyles from "react-jss";
import Dice from "./Dice.js";
import quotes from "./quotesData";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BGShape from "./BGShape.jsx";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "white",
    height: "100vh",
  },
  quote: {
    fontFamily: "FreightDisp Pro",
    fontWeight: 300,
    fontSize: "32px",
    textAlign: "center",
    maxWidth: "70%",
    textWrap: "balance",
    transition: "opacity 0.5s",
  },
  speaker: {
    fontSize: "14px",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  title: {
    fontSize: "12px",
    margin: 0,
  },
  diceContainer: {
    marginTop: "5rem",
    zIndex: 10,
  },
  text: {
    opacity: 100,
  },
  bgShape: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
};

const Quotes = ({ classes }) => {
  const colors = [
    { bg: "#5200FF", fg: "#65FFC8" },
    { bg: "#B4DFFF", fg: "#C900CD" },
    { bg: "#000000", fg: "#FFE3B9" },
    { bg: "#FFE3B9", fg: "#5200FF" },
    { bg: "#FFB038", fg: "#A200A6" },
    { bg: "#A7CCAD", fg: "#5200FF" },
    { bg: "#DBAEFF", fg: "#5200FF" },
    { bg: "#C8CA59", fg: "#08291D" },
  ];

  // display a new quote on click, cycle through based on array length
  // to do: randomize, but no repeats until whole array has been shown
  const len = quotes.length;
  const [displayQuote, setDisplayQuote] = useState(0);
  const [colorPair, setColorPair] = useState(
    gsap.utils.random(0, colors.length - 1, 1)
  );
  const [randomRoll, setRandomRoll] = useState(2);
  const [randomRoll2, setRandomRoll2] = useState(4);
  const [bgShapePos, setBgShapePos] = useState([0, 0]);

  const el = useRef();
  const q = gsap.utils.selector(el);
  const { contextSafe } = useGSAP({ scope: el });

  const getQuote = contextSafe(() => {
    if (displayQuote < len - 1) {
      setDisplayQuote((a) => a + 1);
    } else if (displayQuote >= len - 1) {
      setDisplayQuote(0);
    }
    setRandomRoll(gsap.utils.random(0, 5, 1));
    setRandomRoll2(gsap.utils.random(0, 5, 1));
    setColorPair(gsap.utils.random(0, colors.length - 1, 1));
    setBgShapePos([
      gsap.utils.random(-500, 1500, 1),
      gsap.utils.random(-500, 500, 1),
    ]);
  });

  // shake dice on hover
  const HoverMotion = contextSafe(() => {
    gsap.to(".die", {
      // y: gsap.utils.random(-0.1, 0.1),
      // x: gsap.utils.random(-0.1, 0.1),
      rotate: (index) => {
        return gsap.utils.random((index + 1) * 5, index * -5);
      },
      repeat: 2,
      yoyo: true,
      duration: 0.3,
      transformOrigin: "50% 50%",
      ease: "linear",
    });
  });

  useGSAP(() => {
    //dice positioning
    gsap.to(q(".die"), {
      y: (index) => {
        return gsap.utils.random((index + 4) * -7, (index + 4) * 7);
      },
      x: (index) => {
        return gsap.utils.random((index + 3) * -7, (index + 4) * 7);
      },
      rotate: (index) => {
        return gsap.utils.random((index + 5) * -20, (index + 5) * 12);
      },
      ease: "inout",
      transformOrigin: "50% 50%",
    });
    // color changes
    gsap.to("#text", {
      color: colors[colorPair].fg,
      duration: 1,
    });
    gsap.to("#container", { background: colors[colorPair].bg, duration: 1 });
    gsap.to("#diceRect", {
      fill: colors[colorPair].fg,
      stroke: colors[colorPair].bg,
      // opacity: 0.8,
      duration: 1,
    });
    gsap.to(".diceCirc", {
      fill: colors[colorPair].bg,
      duration: 1,
      opacity: 0.8,
    });
    // bg shape movement
    gsap.to("#shape", {
      x: bgShapePos[0],
      y: bgShapePos[1],
      duration: 3,
      ease: "inout",
    });
  }, [q]);

  return (
    <div ref={el}>
      <div className={classes.container} id="container">
        <p className={`${classes.quote} ${classes.text}`} id="text">
          "{quotes[displayQuote].quote}"
        </p>
        <p className={`${classes.speaker} ${classes.text}`} id="text">
          {quotes[displayQuote].speaker}
        </p>
        <p className={`${classes.title} ${classes.text}`} id="text">
          {quotes[displayQuote].title}
        </p>
        <div onMouseEnter={HoverMotion} className={classes.diceContainer}>
          <Dice
            getQuote={getQuote}
            randomRoll={randomRoll}
            randomRoll2={randomRoll2}
          />
        </div>
        <div className={classes.bgShape}>
          <BGShape color={"hsla(0, 0%, 100%, 40%)"} radius="1250" />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Quotes);
