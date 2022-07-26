import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
  width: "1.125rem",
  height: "1.125rem"
}} {...props}><path d="M21 6H3c-.9 0-1.5-.6-1.5-1.5S2.1 3 3 3h18c.9 0 1.5.6 1.5 1.5S21.9 6 21 6zm1.5 6c0 .9-.5 1.5-1.25 1.5H2.75C2 13.5 1.5 12.9 1.5 12s.5-1.5 1.25-1.5h18.5c.75 0 1.25.6 1.25 1.5zm-1.667 6c1 0 1.667.6 1.667 1.5s-.667 1.5-1.667 1.5H3.167c-1 0-1.667-.6-1.667-1.5S2.167 18 3.167 18h17.666z" /></svg>);