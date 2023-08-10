import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M8.707 3.293a1 1 0 010 1.414L5.414 8H15.5a6.5 6.5 0 110 13H12a1 1 0 110-2h3.5a4.5 4.5 0 100-9H5.414l3.293 3.293a1 1 0 11-1.414 1.414l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 0z" /></svg>);