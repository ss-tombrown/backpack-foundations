import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><g clipPath="url(#a)"><path d="M15.877 6l5.56-5.56a1.501 1.501 0 012.123 2.123L2.563 23.56A1.501 1.501 0 11.44 21.437l4.81-4.81V8.25A2.25 2.25 0 017.5 6h.75V2.248A2.25 2.25 0 0110.5 0h3a2.25 2.25 0 012.25 2.25V6h.127zm2.873 6.48a.375.375 0 00-.64-.266l-10.5 10.5a.319.319 0 00-.1.265c.075.556.546 1.021 1.115 1.021.621 0 1.125-.504 1.125-1.125V22.5h4.5v.375a1.125 1.125 0 002.25 0V22.5a2.25 2.25 0 002.25-2.25v-7.77zm-4.5-9.855a.375.375 0 00-.375-.375h-3.75a.375.375 0 00-.375.375V6h4.5V2.625z" /></g></svg>);