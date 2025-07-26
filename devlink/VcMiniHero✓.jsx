"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VcMiniHero✓.module.css";

export function VcMiniHerocheck_mark({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className={_utils.cx(_styles, "oz-mini-hero", "is--hero-reciprocal")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "mini-hero-icon")}
        tag="div"
        grid={{
          type: "container",
        }}
      >
        <_Builtin.Heading
          className={_utils.cx(
            _styles,
            "vc-heading",
            "is--heading-hero",
            "is--white"
          )}
          tag="h1"
        >
          {"Reciprocal Club Access"}
        </_Builtin.Heading>
        <_Builtin.VFlex
          className={_utils.cx(_styles, "vc-hero__container", "is--hidden-s")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "vc-hero__content")}
            tag="div"
          />
        </_Builtin.VFlex>
      </_Builtin.BlockContainer>
      <_Builtin.Block
        className={_utils.cx(_styles, "vc-hero__mobile-container")}
        tag="div"
      >
        <_Builtin.VFlex
          className={_utils.cx(_styles, "vc-hero__container")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "vc-hero__content")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(
                _styles,
                "vc-heading",
                "is--heading-hero",
                "is--white"
              )}
              tag="h1"
            >
              {"Membership"}
            </_Builtin.Heading>
            <_Builtin.Paragraph
              className={_utils.cx(
                _styles,
                "vc-paragraph",
                "is--larger-type",
                "is--white"
              )}
            >
              {
                "Unlock exclusive benefits and connect with like-minded individuals, shaping the diverse fabric of our city."
              }
              <br />
              <br />
              {
                "Enjoy incredible fine dining, unique social events, bespoke worldwide travel opportunities and much more — at The Vancouver Club. Inquire today."
              }
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "vc-button", "is--inverted-color")}
              id={_utils.cx(
                _styles,
                "w-node-e66b40b0-c627-e319-6200-43bf60b9c555-60b9c545"
              )}
              button={true}
              editable={true}
              block=""
              options={{
                href: "mailto:membership@vancouverclub.ca",
              }}
            >
              {"Inquire about Membership"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.VFlex>
      </_Builtin.Block>
    </_Component>
  );
}
