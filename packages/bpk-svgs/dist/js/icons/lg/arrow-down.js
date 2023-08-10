import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M17.293 7.5H6.707a1.632 1.632 0 00-1.296 2.701l5.081 5.724a1.75 1.75 0 002.472.121q.039-.035.075-.072l5.505-5.724a1.632 1.632 0 00-1.251-2.75z" /></svg>);