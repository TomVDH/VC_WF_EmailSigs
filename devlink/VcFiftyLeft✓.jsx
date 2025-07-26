"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { VcHeadingcheck_mark } from "./VcHeading✓";
import { VcParagraphcheck_mark } from "./VcParagraph✓";
import { VcButtoncheck_mark } from "./VcButton✓";
import * as _utils from "./utils";
import _styles from "./VcFiftyLeft✓.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-452":{"id":"e-452","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-453"}},"mediaQueries":["main","medium"],"target":{"id":"221fd6e1-985f-86a9-364a-7d4738f36fd1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"221fd6e1-985f-86a9-364a-7d4738f36fd1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":240,"direction":"RIGHT","effectIn":true},"createdOn":1752736496754}},"actionLists":{"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VcFiftyLeftcheck_mark({
  as: _Component = _Builtin.Section,
  variant = "Default",
  backgroundImage = "https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/65679b2c29e13c044d5a1f6c_Women-Ros%C3%A9-Cheers.avif",
  headingHeadingVariant = "Default",
  headingHeadingLevel = "h2",
  headingEnableSubHeading = true,
  headingHeadingText = "[[ heading ]]",
  headingSubHeadingText = "[[ sub-heading ]]",
  contentParagraphVariant = "Default",
  contentEnableParagraph = false,
  contentParagraphText = "[[ text ]]",
  buttonButtonVariant = "Default",
  buttonEnableButton = true,
  buttonButtonText = "[[ button text ]]",
  buttonButtonLink,
  buttonButtonAnalyticsId,
  switchVisibility = true,
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Default: "",
    Paper: "w-variant-fd513f34-7edb-5baa-60c5-ff216254a4e1",
    Dark: "w-variant-51d8cd78-3fc0-1ffc-7bd7-f1bba4d981d7",
    Green: "w-variant-e0f8ff5e-3076-dc66-e8c9-3510396f0fef",
    Pewter: "w-variant-1c6d9e5d-cf35-a09a-7422-97d46d0b3d04",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return switchVisibility ? (
    <_Component
      className={_utils.cx(_styles, "oz-fifty", _activeStyleVariant)}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "content", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "aligner", _activeStyleVariant)}
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
        className={_utils.cx(_styles, "full-width", _activeStyleVariant)}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "bg_image", _activeStyleVariant)}
          data-w-id="221fd6e1-985f-86a9-364a-7d4738f36fd1"
          width="auto"
          height="auto"
          loading="lazy"
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
  ) : null;
}
