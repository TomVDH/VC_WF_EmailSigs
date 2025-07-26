"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VcGal.module.css";

export function VcGal({ as: _Component = _Builtin.BlockContainer }) {
  return (
    <_Component
      className={_utils.cx(_styles, "vc-page__gallery", "euro-clubs")}
      grid={{
        type: "container",
      }}
      tag="div"
    />
  );
}
