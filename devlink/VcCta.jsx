"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import { VcHeroHeadingcheck_mark } from "./VcHeroHeading✓";
import { VcParagraphcheck_mark } from "./VcParagraph✓";
import { VcButtoncheck_mark } from "./VcButton✓";
import * as _utils from "./utils";
import _styles from "./VcCta.module.css";

export function VcCta({
  as: _Component = _Builtin.Section,
  variant = "Default",
  headingVariant = "Default",
  headingEnableSubHeading = false,
  headingHeadingLevel = "h2",
  headingSubHeadingLevel = "h3",
  headingHeadingText = "Where you belong.",
  headingSubHeadingText = "This is the default text value",
  paragraphVariant = null,
  paragraphText = (
    <>
      {
        "Membership at the Vancouver Club is for those who appreciate connection, tradition and a discerning way of life. We welcome the opportunity to introduce you to our world."
      }
      <br />
      <br />
      {
        "Discover the ambiance and amenities that make the Vancouver Club truly unique."
      }
    </>
  ),
  paragraphVisibility = true,
  buttonVariant = "Default",
  buttonEnableButton = true,
  buttonButtonAnalyticsId,
  buttonText = "Express YOUR INTEREST",

  buttonLink = {
    href: "#",
  },

  imageVisibility = true,
  imageImage = "https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/685ee932578290aadd39c009_VC-Building_Black%400.5x.png",
}) {
  const _styleVariantMap = {
    Default: "",
    "Default (Dark)": "w-variant-790baee5-1017-a4ec-2b7f-9e7ba5a8ed5e",
    "Full Width": "w-variant-827e2d76-d802-ba73-a7ab-ccb0d2c1a92c",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "oz-section",
        "is--cta",
        _activeStyleVariant
      )}
      tag="section"
      grid={{
        type: "section",
      }}
    >
      <_Builtin.BlockContainer
        className={_utils.cx(
          _styles,
          "oz-container",
          "is--cta",
          _activeStyleVariant
        )}
        tag="div"
        grid={{
          type: "container",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "engagement-wrapper",
            _activeStyleVariant
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "engagement-content",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-43", _activeStyleVariant)}
              loading="lazy"
              width="auto"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/673ce86ac770dcb7ce9dbb58_RECOLOUR_VC_Logo.svg"
            />
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "aligner",
                "is--cta",
                _activeStyleVariant
              )}
              tag="div"
            >
              <VcHeroHeadingcheck_mark
                headingOptionsHeadingLevel={headingHeadingLevel}
                variant={headingVariant}
                headingOptionsEnableSubHeading={headingEnableSubHeading}
                headingOptionsSubHeadingLevel={headingSubHeadingLevel}
                headingContentHeadingText={headingHeadingText}
                headingContentSubHeadingText={headingSubHeadingText}
              />
              <VcParagraphcheck_mark
                variant={paragraphVariant}
                text={paragraphText}
                visibility={paragraphVisibility}
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "div-block-87",
                _activeStyleVariant
              )}
              tag="div"
            >
              <VcButtoncheck_mark
                variant={buttonVariant}
                enableButton={buttonEnableButton}
                buttonAnalyticsId={buttonButtonAnalyticsId}
                buttonSettingsText={buttonText}
                buttonSettingsLink={buttonLink}
              />
            </_Builtin.Block>
          </_Builtin.Block>
          {imageVisibility ? (
            <_Builtin.Image
              className={_utils.cx(_styles, "image-39", _activeStyleVariant)}
              width="Auto"
              height="auto"
              loading="eager"
              alt=""
              src={imageImage}
            />
          ) : null}
        </_Builtin.Block>
      </_Builtin.BlockContainer>
    </_Component>
  );
}
