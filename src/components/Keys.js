import React from "react";

import "./Keys.scss";

import { BlackKey } from "./BlackKey";
import { WhiteKey } from "./WhiteKey";

export function Keys() {
  return (
    <div className="keys">
      <div className="white-keys">
        <WhiteKey note="C5" />
        <WhiteKey note="D5" />
        <WhiteKey note="E5" />
        <WhiteKey note="F5" />
        <WhiteKey note="G5" />
        <WhiteKey note="A5" />
        <WhiteKey note="B5" />
        <WhiteKey note="C6" />
        <WhiteKey note="D6" />
        <WhiteKey note="E6" />
        <WhiteKey note="F6" />
        <WhiteKey note="G6" />
        <WhiteKey note="A6" />
        <WhiteKey note="B6" />
        <WhiteKey note="C7" />
      </div>
      <div className="black-keys">
        <BlackKey note="Csh5" />
        <BlackKey note="Dsh5" />
        <BlackKey note="Fsh5" />
        <BlackKey note="Gsh5" />
        <BlackKey note="Ash5" />
        <BlackKey note="Csh6" />
        <BlackKey note="Dsh6" />
        <BlackKey note="Fsh6" />
        <BlackKey note="Gsh6" />
        <BlackKey note="Ash6" />
      </div>
    </div>
  );
}
