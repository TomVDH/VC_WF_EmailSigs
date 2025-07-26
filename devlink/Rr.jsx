"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Rr.module.css";

const _interactionsData = JSON.parse(
  '{"events":{},"actionLists":{},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Rr({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "vcc-fifty")}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%20%20%0A%20%20%2F*%20bg%20color%20*%2F%0A%20%20.vcc-fifty__container%20%7B%20background-color%3A%20var(--primary)%20!important%3B%20%7D%0A%20%20.vcc-fifty__container%5Bdata-vc-bg-color%3D%22white%22%5D%20%7B%20background-color%3A%20var(--white)%20!important%3B%20%7D%0A%20%20.vcc-fifty__container%5Bdata-vc-bg-color%3D%22primary%22%5D%20%7B%20background-color%3A%20var(--primary)%20!important%3B%20%7D%0A%20%20.vcc-fifty__container%5Bdata-vc-bg-color%3D%22primary-variant%22%5D%20%7B%20background-color%3A%20var(--primary-variant)%20!important%3B%20%7D%0A%20%20.vcc-fifty__container%5Bdata-vc-bg-color%3D%22secondary%22%5D%20%7B%20background-color%3A%20var(--secondary)%20!important%3B%20%7D%0A%20%20.vcc-fifty__container%5Bdata-vc-bg-color%3D%22tertiary%22%5D%20%7B%20background-color%3A%20var(--tertiary)%20!important%3B%20%7D%0A%20%20.vcc-fifty__container%5Bdata-vc-bg-color%3D%22dark%22%5D%20%7B%20background-color%3A%20var(--dark)%20!important%3B%20%7D%0A%0A%20%20%0A%20%20%2F*%20image%20side%3A%20none%20(hide%20image)%20*%2F%0A%20%20.vcc-fifty__container%5Bdata-vc-image-side%3D%22none%22%5D%20.flex-block-1%20%7B%20width%3A%20100%25%3B%20%7D%0A%20%20.vcc-fifty__container%5Bdata-vc-image-side%3D%22none%22%5D%20.flex-block-2%20%7B%20display%3A%20none%3B%20%7D%0A%20%20%20%20%0A%0A%20%20%2F*%20rules%20that%20only%20apply%20to%20desktop%20aka%20%22non-stacked%20layout%22%20*%2F%20%20%0A%20%20%40media%20only%20screen%20and%20(min-width%3A%20992px)%0A%20%20%7B%0A%20%20%20%20%2F*%20for%20the%20%22copy%20dictates%20height%22%20feature%2C%20which%20is%20disabled%20when%20this%20stacks%20(991px%20or%20lower)%20*%2F%0A%20%20%20%20.vcc-fifty__container%5Bdata-vc-copy-dictates-height%3D%22true%22%5D%20.flex-block-2%20img%20%7B%20object-fit%3A%20cover%3B%20width%3A%20100%25%3B%20height%3A%20100%25%3B%20position%3A%20absolute%3B%20%7D%0A%20%20%20%20.vcc-fifty__container%5Bdata-vc-image-vertical-alignment%3D%22top%22%5D%20.flex-block-2%20img%20%7B%20object-position%3A%20top%3B%20%7D%0A%20%20%20%20.vcc-fifty__container%5Bdata-vc-image-vertical-alignment%3D%22bottom%22%5D%20.flex-block-2%20img%20%7B%20object-position%3A%20bottom%3B%20%7D%0A%0A%20%20%20%20%2F*%20image%20side%3A%20left%20(only%20reverse%20this%20order%20on%20desktop%2C%20because%20on%20mobile%20we%20still%20want%20image%20below%20content)%20*%2F%0A%20%20%20%20.vcc-fifty__container%5Bdata-vc-image-side%3D%22left%22%5D%20.flex-block-2%20%7B%20order%3A%201%3B%20%7D%0A%20%20%20%20.vcc-fifty__container%5Bdata-vc-image-side%3D%22left%22%5D%20.flex-block-1%20%7B%20order%3A%202%3B%20%7D%0A%20%20%7D%0A%0A%20%20%2F*%20mobile%20*%2F%0A%20%20%40media%20only%20screen%20and%20(max-width%3A%20991px)%0A%20%20%7B%0A%20%20%20%20%0A%20%20%7D%0A%20%20%0A%0A%3C%2Fstyle%3E" />
      <_Builtin.HFlex
        className={_utils.cx(_styles, "vcc-fifty__container")}
        tag="div"
        data-vc-bg-color=""
        data-vc-image-side="right"
        data-vc-copy-dictates-height=""
        data-vc-image-vertical-alignment=""
      >
        <_Builtin.HFlex
          className={_utils.cx(_styles, "flex-block-1")}
          tag="div"
        >
          <_Builtin.VFlex
            className={_utils.cx(_styles, "carousel-title-line-3")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "c-title-1-wht-c-3")}
              data-w-id="1894be4f-6323-54da-f45e-b269616ad63a"
              tag="h1"
            >
              {"Heading Text"}
            </_Builtin.Heading>
            <_Builtin.Heading
              className={_utils.cx(_styles, "c-title-5-wht-c-2")}
              data-w-id="1894be4f-6323-54da-f45e-b269616ad63c"
              tag="h2"
            >
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              }
            </_Builtin.Heading>
            <_Builtin.Link
              className={_utils.cx(_styles, "vcc-fifty-fifty-block__button")}
              data-w-id="1894be4f-6323-54da-f45e-b269616ad643"
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
        <_Builtin.HFlex
          className={_utils.cx(_styles, "flex-block-4")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "banner-carousel-img-4")}
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/6557bb5d53809623bd8ac020_VC_Fitness_LowRes-260.avif"
          />
        </_Builtin.HFlex>
      </_Builtin.HFlex>
    </_Component>
  );
}
