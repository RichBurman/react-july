// How this works is that if the prop is not passed in, it will use the default value. If the prop is passed in, it will use the passed in value instead of the default value.
import React from "react";

function Button(props) {
  const {text = "Default Text of Big Button"} = props;
  return <button>{text}</button>;
}

export default Button;
