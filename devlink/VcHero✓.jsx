"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { VcButtoncheck_mark } from "./VcButton✓";
import { VcHeroHeadingcheck_mark } from "./VcHeroHeading✓";
import { VcParagraphcheck_mark } from "./VcParagraph✓";
import * as _utils from "./utils";
import _styles from "./VcHero✓.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-450":{"id":"e-450","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-451"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67c281dd-068e-0be0-4daf-6bc361e40e1b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67c281dd-068e-0be0-4daf-6bc361e40e1b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":190,"direction":"LEFT","effectIn":true},"createdOn":1752733977506}},"actionLists":{"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VcHerocheck_mark({
  as: _Component = _Builtin.Section,
  variant = "Base (Blank) [Don't Use]",
  centerHeroEnableCenterHero = false,
  sideHeroEnableSideHero = true,
  sideHeroHeadingVariant = null,
  sideHeroEnableSubHeading = true,
  sideHeroHeadingText = "{{ THIS IS A HEADING }}",
  sideHeroSubHeadingText = "{{ THIS IS A SUB-HEADING }}",
  sideHeroParagraphText = "Mollit exercitation dolore amet duis officia sit minim. Ut minim anim exercitation tempor ullamco in excepteur. Cillum ullamco culpa exercitation non laboris. Et sit sunt sit consectetur.",
  sideHeroEnableButton = true,
  sideHeroButtonAnalyticsId,
  sideHeroButtonText = "{{ BUTTON TEXT }}",
  sideHeroButtonLink,
  centerHeroEnableButton = true,
  centerHeroButtonAnalyticsId,
  centerHeroButtonText = "{{ BUTTON TEXT }}",
  centerHeroButtonLink,
  imageOverrideOverrideImgBackground = false,
  imageOverrideBackgroundImage = "https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/68703707059e9c6af853f7b1_homepage_facade.jpg",
  centerHeroImageVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    "Base (Blank) [Don't Use]": "",
    Homepage: "w-variant-82d96280-67a1-7201-6394-3b11ee38cf7d",
    Membership: "w-variant-7d63da69-30bf-7079-1a23-483cd31d43cb",
    "Food & Beverage": "w-variant-e4c1bd2d-f408-46ce-4100-aea58c03a84e",
    Weddings: "w-variant-4b535f97-e78a-3334-e591-44e2bc69fcf9",
    Events: "w-variant-c4ecabb4-33a6-b853-762e-bd0898fed784",
    Travel: "w-variant-e40792b1-9b2e-f67f-3b9d-1014f0c4604d",
    "Health & Wellness": "w-variant-38ad5934-64e5-dca6-50a9-6c06f0fcd8e0",
    Accommodations: "w-variant-66349f16-6d27-d750-0fb1-7c9a26593486",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "oz-hero", _activeStyleVariant)}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "sticky-mobile-background",
          _activeStyleVariant
        )}
        tag="div"
      />
      {centerHeroEnableCenterHero ? (
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "sticky-container",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "sticky-center-wrapper",
              _activeStyleVariant
            )}
            tag="div"
          >
            {centerHeroImageVisibility ? (
              <_Builtin.Image
                className={_utils.cx(_styles, "logo", _activeStyleVariant)}
                loading="lazy"
                width="Auto"
                height="auto"
                alt=""
                src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/6718293a97faf5bcf16a80ca_inv_VC_Logo_WM_only.svg"
              />
            ) : null}
            <VcButtoncheck_mark
              enableButton={centerHeroEnableButton}
              buttonSettingsText={centerHeroButtonText}
              buttonSettingsLink={centerHeroButtonLink}
              buttonAnalyticsId={centerHeroButtonAnalyticsId}
              variant="Wire (Hero)"
            />
            <_Builtin.DOM
              className={_utils.cx(_styles, "icon", _activeStyleVariant)}
              tag="svg"
              width="100%"
              height="100%"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <_Builtin.DOM
                tag="path"
                fill-rule="evenodd"
                d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
                fill="currentColor"
              />
            </_Builtin.DOM>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {sideHeroEnableSideHero ? (
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "sticky-container-left",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "sticky-left-wrapper",
              _activeStyleVariant
            )}
            data-w-id="67c281dd-068e-0be0-4daf-6bc361e40e1b"
            tag="div"
          >
            <VcHeroHeadingcheck_mark
              variant={sideHeroHeadingVariant}
              headingOptionsEnableSubHeading={sideHeroEnableSubHeading}
              headingContentHeadingText={sideHeroHeadingText}
              headingContentSubHeadingText={sideHeroSubHeadingText}
            />
            <VcParagraphcheck_mark
              text={sideHeroParagraphText}
              variant="Default (White)"
              visibility={true}
            />
            <VcButtoncheck_mark
              enableButton={sideHeroEnableButton}
              buttonSettingsText={sideHeroButtonText}
              buttonSettingsLink={sideHeroButtonLink}
              buttonAnalyticsId={sideHeroButtonAnalyticsId}
              variant="Wire (Hero)"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {imageOverrideOverrideImgBackground ? (
        <_Builtin.Image
          className={_utils.cx(
            _styles,
            "hero-background-image",
            _activeStyleVariant
          )}
          loading="eager"
          width="auto"
          height="auto"
          alt=""
          src={imageOverrideBackgroundImage}
        />
      ) : null}
    </_Component>
  );
}
