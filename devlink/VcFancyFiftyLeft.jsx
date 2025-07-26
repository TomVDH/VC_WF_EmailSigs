"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { VcHeadingcheck_mark } from "./VcHeading✓";
import { VcParagraphcheck_mark } from "./VcParagraph✓";
import { VcButtoncheck_mark } from "./VcButton✓";
import * as _utils from "./utils";
import _styles from "./VcFancyFiftyLeft.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-454":{"id":"e-454","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInRight","autoStopEventId":"e-455"}},"mediaQueries":["main","medium"],"target":{"id":"a7844ae5-f657-a953-ebf6-0403cc86e9ff","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a7844ae5-f657-a953-ebf6-0403cc86e9ff","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":250,"direction":"RIGHT","effectIn":true},"createdOn":1752737726773}},"actionLists":{"slideInRight":{"id":"slideInRight","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":100,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}},{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VcFancyFiftyLeft({
  as: _Component = _Builtin.Section,
  variant = "Base",
  headingVariant = null,
  headingEnableSubHeading = false,
  headingHeadingText = "Event Spaces",
  headingSubHeadingText = "This is the default text value",
  paragraphVariant = "Base",
  paragraphText = (
    <>
      {
        "Book a romantic reception in the Grand Ballroom against a backdrop of ornate wooden architraves, tall ceilings, and chandeliers. Plan a whimsical ceremony in the Georgian Room surrounded by beautifully adorned fireplaces, embellished crown moldings, and strikingly grand windows. "
      }
      <br />
      <br />
      {
        "Experience true opulence with a full Club buyout. Express your heartfelt vows in the lobby surrounded by magnificent marble, interesting architectural elements, and a sense of heritage and legacy. "
      }
      <br />
      <br />
      {
        "Have an ambient reception in the atrium surrounded by twinkling stars, and then dance the night away in the Grand Ballroom."
      }
      <br />
    </>
  ),
  paragraphVisibility = true,
  buttonVariant = null,
  buttonEnableButton = true,
  buttonButtonAnalyticsId,
  buttonText = "DISCOVER OUR VENUES",

  buttonLink = {
    href: "#",
  },

  imageImage = "https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/6753729c0c8ec1c533ff6c5b_VCC%202024%20Sept%2021.avif",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Base: "",
    Weddings: "w-variant-1f619744-abe4-7f10-65d1-20ae7283d494",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "oz-fifty",
        "default-framed",
        "section-3",
        _activeStyleVariant
      )}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.HFlex
        className={_utils.cx(
          _styles,
          "full-width",
          "default-framed-2",
          "is--flipped",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "bg_image",
            "default-framed",
            "reversed",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-42", _activeStyleVariant)}
            data-w-id="a7844ae5-f657-a953-ebf6-0403cc86e9ff"
            width="auto"
            height="auto"
            loading="lazy"
            alt=""
            src={imageImage}
          />
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "bg_empty",
            "default-framed-4",
            _activeStyleVariant
          )}
          tag="div"
        />
      </_Builtin.HFlex>
      <_Builtin.Block
        className={_utils.cx(
          _styles,
          "content",
          "is-fr",
          "default-framed",
          "is--flipped",
          _activeStyleVariant
        )}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "content-empty",
            "default-framed-6",
            _activeStyleVariant
          )}
          tag="div"
        />
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "content-content",
            "is--flipped",
            "default-framed-7",
            _activeStyleVariant
          )}
          tag="div"
        >
          <VcHeadingcheck_mark
            headingOptionsEnableSubHeading={headingEnableSubHeading}
            variant={headingVariant}
            headingContentSubHeadingText={headingSubHeadingText}
            headingContentHeadingText={headingHeadingText}
            headingOptionsHeadingLevel="h2"
          />
          <VcParagraphcheck_mark
            variant={paragraphVariant}
            text={paragraphText}
            visibility={paragraphVisibility}
          />
          <VcButtoncheck_mark
            variant={buttonVariant}
            buttonSettingsText={buttonText}
            buttonSettingsLink={buttonLink}
            enableButton={buttonEnableButton}
            buttonAnalyticsId={buttonButtonAnalyticsId}
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "content-slot",
              "default-framed-10",
              _activeStyleVariant
            )}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "content-slot",
              "default-framed-10",
              _activeStyleVariant
            )}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "content-slot",
              "default-framed-10",
              _activeStyleVariant
            )}
            tag="div"
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
