"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./AdamBlockUncoded.module.css";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function AdamBlockUncoded({ as: _Component = _Builtin.HFlex }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "adam-container")} tag="div">
      <_Builtin.HFlex className={_utils.cx(_styles, "flex-block-5")} tag="div">
        <_Builtin.Image
          className={_utils.cx(_styles, "banner-carousel-img-5")}
          width="auto"
          height="auto"
          loading="lazy"
          alt=""
          src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/6557bb5d53809623bd8ac020_VC_Fitness_LowRes-260.avif"
        />
      </_Builtin.HFlex>
      <_Builtin.HFlex className={_utils.cx(_styles, "flex-block-1")} tag="div">
        <_Builtin.VFlex
          className={_utils.cx(_styles, "carousel-title-line-3")}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "c-title-1-wht-c-3")}
            data-w-id="09885858-715a-bb3d-276e-74324d97da64"
            tag="h1"
          >
            {"Personal Training"}
          </_Builtin.Heading>
          <_Builtin.Heading
            className={_utils.cx(_styles, "c-title-5-wht-c-2")}
            data-w-id="09885858-715a-bb3d-276e-74324d97da66"
            tag="h2"
          >
            {
              "Boxing, weights, technique, or improved mobility. Personalize your fitness regimen and target key challenges with expert guidance from certified professionals."
            }
          </_Builtin.Heading>
          <_Builtin.Link
            className={_utils.cx(_styles, "c-button-l-wht-2")}
            data-w-id="09885858-715a-bb3d-276e-74324d97da68"
            button={false}
            block="inline"
            options={{
              href: "https://vancouverclub.ca/posts/vc-personal-training",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block-5")}
              tag="div"
            >
              {"LEARN MORE"}
            </_Builtin.Block>
          </_Builtin.Link>
        </_Builtin.VFlex>
      </_Builtin.HFlex>
    </_Component>
  );
}
