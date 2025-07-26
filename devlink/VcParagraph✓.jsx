"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VcParagraph✓.module.css";

export function VcParagraphcheck_mark({
  as: _Component = _Builtin.Paragraph,
  variant = "Default",
  text = "Mollit exercitation dolore amet duis officia sit minim. Ut minim anim exercitation tempor ullamco in excepteur. Cillum ullamco culpa exercitation non laboris. Et sit sunt sit consectetur.",
  visibility = true,
}) {
  const _styleVariantMap = {
    Default: "",
    "Default (White)": "w-variant-d640f6fd-d9c9-936a-7f79-15274d74749c",
    "Default (Gray)": "w-variant-36c39411-c5db-7269-3c65-cd92710de746",
  };

  const _activeStyleVariant = _styleVariantMap[variant];
  return visibility ? (
    <_Component
      className={_utils.cx(_styles, "oz-paragraph", _activeStyleVariant)}
    >
      {text}
    </_Component>
  ) : null;
}
