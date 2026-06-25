import React from 'react';

export const ErrorSVG = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_2147_25362"
      style={{ maskType: 'alpha' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="80"
      height="80"
    >
      <rect
        width="80"
        height="80"
        rx="32"
        fill="black"
      />
    </mask>
    <g mask="url(#mask0_2147_25362)">
      <path
        d="M-5.38477 30.4614C-5.38477 12.7883 8.94212 -1.53857 26.6152 -1.53857H57.9998C75.6729 -1.53857 89.9998 12.7883 89.9998 30.4614V57.9999C89.9998 75.673 75.673 89.9999 57.9999 89.9999H26.6153C8.94215 89.9999 -5.38477 75.673 -5.38477 57.9999V30.4614Z"
        fillOpacity="1"
        fill="url(#errorGradient)"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.8399 25.9007C27.9171 24.8078 29.6717 24.7994 30.759 25.882L54.7912 49.8098C55.8785 50.8924 55.8868 52.656 54.8097 53.7489C53.7326 54.8418 51.978 54.8501 50.8906 53.7675L26.8585 29.8398C25.7711 28.7571 25.7628 26.9936 26.8399 25.9007Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M54.8445 25.822C55.9233 26.9132 55.9178 28.6768 54.8322 29.7611L30.7247 53.8403C29.639 54.9247 27.8844 54.9192 26.8055 53.828C25.7267 52.7368 25.7322 50.9732 26.8178 49.8889L50.9253 25.8097C52.011 24.7253 53.7656 24.7308 54.8445 25.822Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="errorGradient"
        x1="-3.09553"
        y1="12.1922"
        x2="85.2635"
        y2="103.76"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF5252" />
        <stop
          offset="1"
          stopColor="#FFD180"
        />
      </linearGradient>
    </defs>
  </svg>
);
