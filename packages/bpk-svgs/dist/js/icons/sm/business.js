import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M9 1.5a2.634 2.634 0 00-1.2.274.679.679 0 00-.3.626v2.262A1.377 1.377 0 009 6a1.377 1.377 0 001.5-1.338V2.4a.685.685 0 00-.304-.62A2.566 2.566 0 009 1.5zm3 7.952v4.383a3.083 3.083 0 01-.254 1.273c-.066.14-.14.278-.214.417a3.272 3.272 0 00-.477 1.32l-.408 4.312c-.053.764-.483 1.343-.994 1.343H8.418c-.512 0-.941-.58-.995-1.343l-.408-4.312a3.131 3.131 0 00-.563-1.414q-.08-.13-.157-.263A2.452 2.452 0 016 13.951V9.568a1.543 1.543 0 01.535-1.284 4.575 4.575 0 012.5-.784 4.441 4.441 0 012.429.675A1.514 1.514 0 0112 9.452zm4.5 7.048a2.634 2.634 0 00-1.2.274.679.679 0 00-.3.626v3.762a1.377 1.377 0 001.5 1.338 1.377 1.377 0 001.5-1.338V17.4a.685.685 0 00-.304-.62 2.55 2.55 0 00-1.196-.28z" /></svg>);