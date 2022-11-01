import React from "react";
import { Keys } from "./Keys";

import "./Piano.scss";

export function Piano(props) {
  return (
    <div className="piano">
      <h3 className="piano-logo">Robinson Corp.</h3>
      <Keys keyCode={props.keyCode} />
    </div>
  );
}
