import React from "react";

export const Compass = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 5.999l-5.621 2.986c-.899-.104-1.806.191-2.474.859-.662.663-.95 1.561-.862 2.428l-3.043 5.728 5.724-3.042c.884.089 1.772-.205 2.432-.865.634-.634.969-1.524.859-2.473l2.985-5.621zm-5.97 7.22c-.689 0-1.25-.559-1.25-1.249-.001-.691.559-1.251 1.25-1.25.69 0 1.25.56 1.25 1.25-.001.689-.56 1.249-1.25 1.249z" />
  </svg>
);

export const HeartEmpty = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z" />
  </svg>
);

export const HeartFull = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="#ED4956"
  >
    <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
  </svg>
);

export const User = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z" />
  </svg>
);

export const Comment = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 3c5.514 0 10 3.476 10 7.747 0 4.272-4.48 7.748-9.986 7.748-.62 0-1.092-.046-1.759-.097-1 .776-1.774 1.403-3.485 1.962.26-1.383-.113-2.259-.514-3.259-2.383-1.505-4.256-3.411-4.256-6.354 0-4.271 4.486-7.747 10-7.747zm0-2c-6.627 0-12 4.363-12 9.747 0 3.13 1.816 5.916 4.641 7.699.867 2.167-1.084 4.008-3.143 4.502 3.085.266 6.776-.481 9.374-2.497 7.08.54 13.128-3.988 13.128-9.704 0-5.384-5.373-9.747-12-9.747z" />
  </svg>
);
export const CommentFull = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M12 1c-6.627 0-12 4.364-12 9.749 0 3.131 1.817 5.917 4.64 7.7.868 2.167-1.083 4.008-3.142 4.503 2.271.195 6.311-.121 9.374-2.498 7.095.538 13.128-3.997 13.128-9.705 0-5.385-5.373-9.749-12-9.749z" />
  </svg>
);
export const Logo = ({ size = 28 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M22.819 11.51c-1.16-1.632-3.001-3.002-5.014-3.826-1.548 1.815-2.639 5.324-.159 8.423 2.178-1.091 4.091-2.908 5.173-4.597zm-6.105 5.001c-2.565-3.434-1.455-7.185.093-9.183-.896-.275-1.356-.341-1.779-.402-1.868-2.159-4.438-1.964-5.047-1.944.157.295.445.754.633 2.241-2.881.806-3.873 1.766-5.98 3.573-.393-.43-1.378-1.54-3.024-1.968.627 1.763.688 3.763.079 5.37 1.727-.379 2.817-1.84 2.974-2.014 2.201 2.282 3.161 3.4 5.952 4.415.051.995-.503 2.126-.634 2.374.685.022 3.213.204 5.072-1.975.513-.1.931-.203 1.661-.487zm7.286-5.028c-2.387 4.033-6.093 5.927-8.417 6.428-1.233 1.371-3.017 2.066-5.306 2.066-.715 0-1.234-.06-2.101-.141.632-.594 1.172-1.573 1.362-2.573-2.249-.915-3.692-2.408-4.863-3.629-2.031 1.953-4.087 1.655-4.675 1.655.361-.627 2.199-3.713 0-7.592.552.009 2.661-.159 4.702 1.726 1.207-1.04 2.571-2.204 4.798-2.917-.229-1.005-.631-1.692-1.325-2.387.72-.067 1.433-.119 2.13-.119 1.948 0 3.768.404 5.228 1.99 4.479.719 7.218 3.587 8.467 5.493zm-3.032-.505c0 .552-.448 1-1 1-.551 0-1-.448-1-1 0-.551.449-1 1-1 .552 0 1 .449 1 1z" />
  </svg>
);
