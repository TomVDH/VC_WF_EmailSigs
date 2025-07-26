"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CustomCode.module.css";

export function CustomCode({ as: _Component = _Builtin.HtmlEmbed }) {
  return <_Component className={_utils.cx(_styles, "c-custom-code")} />;
}
