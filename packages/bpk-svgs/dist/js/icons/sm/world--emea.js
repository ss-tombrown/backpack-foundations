import React from "react";
export default (({
  styles = {},
  ...props
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" style={{
  width: "1rem",
  height: "1rem"
}} {...props}><path d="M12 1.5c5.799 0 10.5 4.701 10.5 10.5S17.799 22.5 12 22.5 1.5 17.799 1.5 12 6.201 1.5 12 1.5zm-.55 3.02l-.097.008-.327.035a7.501 7.501 0 00.649 14.93L12 19.5l.184-.002-.034-.476-.015-.475c0-.172-.074-.233-.175-.262l-.064-.015-.145-.024c-.104-.02-.206-.055-.275-.16l-.044-.093-.096-.285c-.098-.285-.203-.471-.56-.502a1.17 1.17 0 01-.345-.075l-.072-.032-.113-.06c-.102-.052-.202-.067-.493.046a2.09 2.09 0 01-2.269-.742 4.497 4.497 0 01-.844-2.37c.006-.275.09-.542.242-.77.044-.088.143-.17.26-.248l.121-.075.24-.14.104-.065.084-.063.305-.258c.377-.326.663-.613.803-1.097l.051-.22 2.1-.087.32.113c.86.26 1.81.201 2.75.062l.352-.055 1.358-.24.083-.081c.277-.352-.055-.982-.52-1.128a4.627 4.627 0 00-1.57.033c-.479.02-1.049-.177-1.2-.606l-.032-.136-.007-.08-.008-.176c-.007-.124-.03-.24-.126-.31a.444.444 0 00-.41-.002c-.54.263-1.057.57-1.547.916a1.78 1.78 0 01-1.521.242l-.19-.068.056-1.017.08-.079a.786.786 0 01.325-.13l.125-.022.287-.036c.254-.034.473-.092.522-.325a1.742 1.742 0 00-.022-.378c-.003-.273.175-.458.413-.614l.124-.075.529-.287.123-.075c.239-.156.418-.34.417-.613a2.06 2.06 0 00-.199-.612 1.6 1.6 0 01-.038-.291v-.145l.026-.214zm6.338 7.207l-1.327.54a.451.451 0 00-.28.217.428.428 0 00.023.28 5.174 5.174 0 002.513 2.574 7.17 7.17 0 00.4-.968.643.643 0 01-.175-.043.72.72 0 01-.26-.31 9.735 9.735 0 01-.894-2.29zM9.658 5.05c.175-.026.331.207.46.482l.053.12.108.273.113.304.026.062.028.045c.004.004.008.005.01.004-.334.104-.664.22-.99.35l-.484.204-.316-.367-.02-.042-.008-.047.027-.058.11-.118.07-.096.072-.114.321-.555.086-.135c.114-.17.227-.297.334-.312z" /></svg>);