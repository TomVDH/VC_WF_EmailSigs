"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VcMaintenanceBlock.module.css";

export function VcMaintenanceBlock({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "vc-maintenance")} tag="div">
      <_Builtin.Image
        className={_utils.cx(_styles, "image-30")}
        width="auto"
        height="auto"
        loading="lazy"
        alt=""
        src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/6793dd2aaba846da7d616100_VC_Carbuncle@3x.png"
      />
      <_Builtin.Heading className={_utils.cx(_styles, "heading-10")} tag="h2">
        {"Maintenance Notice"}
      </_Builtin.Heading>
      <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-27")}>
        {
          "This part of our website is currently undergoing updates and may be subject to change. Please check back soon, or, reach out to the Concierge."
        }
        <br />
        <br />
        {"We apologize for the inconvenience."}
      </_Builtin.Paragraph>
    </_Component>
  );
}
