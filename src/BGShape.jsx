import React from "react";

const BGShape = ({ color, radius }) => {
  return (
    <svg viewbox="0 0 50 50" overflow="visible" pointerEvents={"none"}>
      <defs>
        <circle id="shape" cx="50" cy="50" r={radius} />
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="19.5"
            numOctaves="10"
            result="turbulence"
          />
          <feComposite
            operator="in"
            in="turbulence"
            in2="SourceAlpha"
            result="composite"
          />
          <feColorMatrix in="composite" type="luminanceToAlpha" />
          <feBlend in="SourceGraphic" in2="composite" mode="color-burn" />
        </filter>
        <mask id="gradient">
          <radialGradient id="fade">
            <stop offset="5%" stop-color="white" stop-opacity="0.7" />
            <stop offset="95%" stop-color="black" stop-opacity="0.1" />
          </radialGradient>
          <use href="#shape" fill="url('#fade')" />
        </mask>
      </defs>
      <use
        href="#shape"
        fill={color}
        mask="url(#gradient)"
        filter="url('#noise')"
      />
    </svg>
  );
};

export default BGShape;
