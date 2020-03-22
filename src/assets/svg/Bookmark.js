import React from "react";

export default function Bookmark(props) {
  const { height = 25, width = 25, className = "", onClick = () => {} } = props;
  return (
    <svg
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 423.936 423.936"
      height={height}
      width={width}
      className={className}
      xmlSpace="preserve"
      onClick={onClick}
    >
      <g>
        <g>
          <path
            d="M327.68,0H96.256c-22.528,0-40.96,18.432-40.96,40.96v357.376c0,9.728,5.632,18.944,14.336,23.04
			c9.216,4.096,19.456,3.072,27.136-3.072l0.512-0.512l114.688-96.768l114.688,96.768l0.512,0.512
			c4.608,3.584,10.24,5.632,15.872,5.632c3.584,0,7.68-1.024,11.264-3.072c8.704-4.096,14.336-13.312,14.336-23.04V40.96
			C368.64,18.432,350.208,0,327.68,0z"
          />
        </g>
      </g>
    </svg>
  );
}
