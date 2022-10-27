import React from "react";
import { Keys } from "./Keys";

import "./Piano.scss";

export function Piano() {
  return (
    <div className="piano">
      <h3 className="piano-logo">Robinson Corp.</h3>
      <Keys />
    </div>
  );
}
