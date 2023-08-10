import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M19 6h-.763a3 3 0 01-2.426-1.235l-.385-.53A3 3 0 0013 3h-2.181a3 3 0 00-2.427 1.235l-.684.941A2 2 0 016.091 6H5a3 3 0 00-3 3v9a3 3 0 003 3h14a3 3 0 003-3V9a3 3 0 00-3-3zm-7 12a5 5 0 115-5 5 5 0 01-5 5zm3-5a3 3 0 11-3-3 3 3 0 013 3z" /></svg>);