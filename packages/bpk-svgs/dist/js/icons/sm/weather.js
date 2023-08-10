import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 0a1.5 1.5 0 00-1.5 1.5V3a1.5 1.5 0 003 0V1.5A1.5 1.5 0 0012 0zm0 19.5a1.5 1.5 0 00-1.5 1.5v1.5a1.5 1.5 0 003 0V21a1.5 1.5 0 00-1.5-1.5zM0 12a1.5 1.5 0 001.5 1.5H3a1.5 1.5 0 000-3H1.5A1.5 1.5 0 000 12zm19.5 0a1.5 1.5 0 001.5 1.5h1.5a1.5 1.5 0 000-3H21a1.5 1.5 0 00-1.5 1.5zM3.515 5.636a1.5 1.5 0 112.084-2.158l.037.037 1.06 1.06a1.5 1.5 0 11-2.083 2.159l-.037-.037-1.062-1.061zm13.788 13.789a1.5 1.5 0 112.121-2.122l1.061 1.061a1.5 1.5 0 11-2.084 2.158l-.037-.037-1.06-1.06zm-13.788 1.06a1.5 1.5 0 002.12 0l1.062-1.06a1.5 1.5 0 00-2.122-2.122l-1.06 1.061a1.5 1.5 0 000 2.121zM17.303 6.697a1.5 1.5 0 002.121 0l1.061-1.06a1.5 1.5 0 10-2.121-2.122l-1.06 1.06a1.5 1.5 0 000 2.121v.001zM12 18a6 6 0 10-6-6 6 6 0 006 6z" /></svg>);