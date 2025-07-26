"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { VcHeadingcheck_mark } from "./VcHeading✓";
import { VcParagraphcheck_mark } from "./VcParagraph✓";
import { VcButtoncheck_mark } from "./VcButton✓";
import * as _utils from "./utils";
import _styles from "./VcFiftyRight✓.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-460":{"id":"e-460","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInLeft","autoStopEventId":"e-461"}},"mediaQueries":["main","medium"],"target":{"id":"1414986c-b8f2-ada0-d4f8-739d19b43c76","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"1414986c-b8f2-ada0-d4f8-739d19b43c76","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":240,"direction":"LEFT","effectIn":true},"createdOn":1752784445965}},"actionLists":{"slideInLeft":{"id":"slideInLeft","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":-100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VcFiftyRightcheck_mark({
  as: _Component = _Builtin.Section,
  variant = "Default",
  backgroundImage = "https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/686d88a300d3228f8a34a985_homepage-facade.jpg",
  headingHeadingVariant = "Default",
  headingHeadingLevel = "h2",
  headingEnableSubHeading = true,
  headingHeadingText = "[[ heading ]]",
  headingSubHeadingText = "[[ sub heading ]]",
  contentParagraphVariant = "Default",
  contentEnableParagraph = true,
  contentParagraphText = "[[ text ]]",
  buttonButtonVariant = "Default",
  buttonEnableButton = true,
  buttonButtonText = "[[ BUTTON TEXT ]]",
  buttonButtonLink,
  buttonButtonAnalyticsId,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Default: "",
    Paper: "w-variant-d163389a-b899-79ab-c7e6-4c1284a5321e",
    Dark: "w-variant-a2156036-8763-a535-5be9-cc4464885f52",
    Green: "w-variant-06f81ed4-6897-8d87-4abe-5af56e0f2359",
    Pewter: "w-variant-a91903dd-e1d7-d35b-80d5-424e32b3725b",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "oz-fifty",
        "is--flipped",
        _activeStyleVariant
      )}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "content",
          "is--flipped",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "aligner",
            "is--flipped",
            _activeStyleVariant
          )}
          tag="div"
        >
          <VcHeadingcheck_mark
            headingOptionsEnableSubHeading={headingEnableSubHeading}
            headingOptionsHeadingLevel={headingHeadingLevel}
            variant={headingHeadingVariant}
            headingContentSubHeadingText={headingSubHeadingText}
            headingContentHeadingText={headingHeadingText}
          />
          <VcParagraphcheck_mark
            variant={contentParagraphVariant}
            text={contentParagraphText}
            visibility={contentEnableParagraph}
          />
          <VcButtoncheck_mark
            variant={buttonButtonVariant}
            buttonSettingsText={buttonButtonText}
            buttonSettingsLink={buttonButtonLink}
            enableButton={buttonEnableButton}
            buttonAnalyticsId={buttonButtonAnalyticsId}
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "content-empty", _activeStyleVariant)}
        tag="div"
      />
      <_Builtin.HFlex
        className={_utils.cx(
          _styles,
          "full-width",
          "is--flipped",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "bg_image", _activeStyleVariant)}
          data-w-id="1414986c-b8f2-ada0-d4f8-739d19b43c76"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src={backgroundImage}
        />
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "bg_empty", _activeStyleVariant)}
          tag="div"
          grid={{
            type: "container",
          }}
        />
      </_Builtin.HFlex>
    </_Component>
  );
}
