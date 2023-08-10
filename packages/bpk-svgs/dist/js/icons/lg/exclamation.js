import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1.5rem",
  height: "1.5rem"
}} {...props}><path d="M20.61 16.235l-6.098-11.64a2.775 2.775 0 00-5.024 0L3.39 16.235C2.28 18.355 3.674 21 5.902 21h12.196c2.228 0 3.622-2.645 2.512-4.765zM12 18a1 1 0 111-1 1 1 0 01-1 1zm1-4a1 1 0 11-2 0V9a1 1 0 012 0z" /></svg>);