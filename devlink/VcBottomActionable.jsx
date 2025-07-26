"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VcBottomActionable.module.css";

export function VcBottomActionable({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "oz-section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "vc-wrapper")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "container-3")}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-7")}
            loading="lazy"
            width="280"
            height="auto"
            alt="A pencil illustration showing the Vancouver Club's building exterior."
            src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/6723bdc37abde0da763f2cdc_VC_Building%400.75x.png"
          />
          <_Builtin.Heading
            className={_utils.cx(_styles, "vc-heading")}
            tag="h2"
          >
            {"Where You Belong"}
          </_Builtin.Heading>
          <_Builtin.Paragraph
            className={_utils.cx(
              _styles,
              "vc-paragraph",
              "is--larger-type",
              "is--centered-text"
            )}
          >
            {
              "Membership at The Vancouver Club is for those who appreciate connection, tradition, and an elevated way of life. We welcome the opportunity to introduce you to our world. "
            }
            <br />
            <br />
            {
              "Discover the ambiance, amenities, and experiences that make The Vancouver Club truly unique."
            }
            <br />
          </_Builtin.Paragraph>
          <_Builtin.Link
            className={_utils.cx(
              _styles,
              "vc-button",
              "ga---tour-inq",
              "is--wide-btn"
            )}
            button={true}
            block=""
            options={{
              href: "#",
              target: "_blank",
              preload: "none",
            }}
          >
            {"Express Your Interest"}
          </_Builtin.Link>
        </_Builtin.BlockContainer>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
