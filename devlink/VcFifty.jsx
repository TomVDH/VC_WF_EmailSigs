"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./VcFifty.module.css";

export function VcFifty({
  as: _Component = _Builtin.Section,
  headingVisibility = true,
  headingText = "Heading",
  paragraphVisibility = true,
  paragraphText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  richTextVisibility = false,
  richText = "",
  buttonVisibility = true,
  buttonText = "BUTTON TEXT",

  buttonLink = {
    href: "#",
  },

  image = "",
  backgroundColourReferToTheWebflowVariablesForSelectableColoursTypeTheirVariableNameBelow,
  imageSideTypeLeftForLeftAlignedNoneToHideDefaultsToRightAligned,
  copyHeightPriorityIfSetToTrueTheCopyDeterminesTheMaxHeightOfTheBlockInsteadOfTheImageHeight,
  imageVerticalAlignmentSetTheVerticalAlignmentOfTheImageCopyHeightPriorityMustBeEnabledForThisToWork,
  imageMaxHeightOnMobileInPx,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "vc-fifty")}
      grid={{
        type: "section",
      }}
      tag="section"
      data-vc-background-color={
        backgroundColourReferToTheWebflowVariablesForSelectableColoursTypeTheirVariableNameBelow
      }
      data-vc-image-side={
        imageSideTypeLeftForLeftAlignedNoneToHideDefaultsToRightAligned
      }
      data-vc-copy-height-priority={
        copyHeightPriorityIfSetToTrueTheCopyDeterminesTheMaxHeightOfTheBlockInsteadOfTheImageHeight
      }
      data-vc-image-vertical-alignment={
        imageVerticalAlignmentSetTheVerticalAlignmentOfTheImageCopyHeightPriorityMustBeEnabledForThisToWork
      }
      data-vc-maximum-image-height-on-mobile={imageMaxHeightOnMobileInPx}
    >
      <_Builtin.HtmlEmbed value="%3Cstyle%3E%0A%20%20%0A%20%20%2F*%20bg%20color%20*%2F%0A%20%20.vc-fifty__container%20%7B%20background-color%3A%20var(--primary)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22white%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--white)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22White%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--white)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22primary%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--primary)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22Primary%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--primary)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22primary-variant%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--primary-variant)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22Primary%20Variant%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--primary-variant)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22secondary%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--secondary)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22Secondary%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--secondary)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22tertiary%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--tertiary)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22Tertiary%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--tertiary)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22dark%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--dark)%20!important%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-background-color%3D%22Dark%22%5D%20.vc-fifty__container%20%7B%20background-color%3A%20var(--dark)%20!important%3B%20%7D%0A%0A%20%20%0A%20%20%2F*%20image%20side%3A%20none%20(hide%20image)%20*%2F%0A%20%20.vc-fifty%5Bdata-vc-image-side%3D%22none%22%5D%20.vc-fifty__panel--content%20%7B%20width%3A%20100%25%3B%20%7D%0A%20%20.vc-fifty%5Bdata-vc-image-side%3D%22none%22%5D%20.vc-fifty__panel--image%20%7B%20display%3A%20none%3B%20%7D%0A%20%20%20%20%0A%0A%20%20%2F*%20rules%20that%20only%20apply%20to%20desktop%20aka%20%22non-stacked%20layout%22%20*%2F%20%20%0A%20%20%40media%20only%20screen%20and%20(min-width%3A%20992px)%0A%20%20%7B%0A%20%20%20%20%2F*%20for%20the%20%22copy%20dictates%20height%22%20feature%2C%20which%20is%20disabled%20when%20this%20stacks%20(991px%20or%20lower)%20*%2F%0A%20%20%20%20.vc-fifty%5Bdata-vc-copy-height-priority%3D%22true%22%5D%20.vc-fifty__container%20.vc-fifty__image%20%7B%20object-fit%3A%20cover%3B%20width%3A%20100%25%3B%20height%3A%20100%25%3B%20position%3A%20absolute%3B%20%7D%0A%20%20%20%20.vc-fifty%5Bdata-vc-image-vertical-alignment%3D%22top%22%5D%20.vc-fifty__container%20.vc-fifty__image%20%7B%20object-position%3A%20top%3B%20%7D%0A%20%20%20%20.vc-fifty%5Bdata-vc-image-vertical-alignment%3D%22bottom%22%5D%20.vc-fifty__container%20.vc-fifty__image%20%7B%20object-position%3A%20bottom%3B%20%7D%0A%0A%20%20%20%20%2F*%20image%20side%3A%20left%20(only%20reverse%20this%20order%20on%20desktop%2C%20because%20on%20mobile%20we%20still%20want%20image%20below%20content)%20*%2F%0A%20%20%20%20.vc-fifty%5Bdata-vc-image-side%3D%22left%22%5D%20.vc-fifty__container%20.vc-fifty__panel--image%20%7B%20order%3A%201%3B%20%7D%0A%20%20%20%20.vc-fifty%5Bdata-vc-image-side%3D%22left%22%5D%20.vc-fifty__container%20.vc-fifty__panel--content%20%7B%20order%3A%202%3B%20%7D%0A%20%20%7D%0A%0A%20%20%2F*%20mobile%20*%2F%0A%20%20%40media%20only%20screen%20and%20(max-width%3A%20991px)%0A%20%20%7B%0A%20%20%20%20.vc-fifty%5Bdata-vc-maximum-image-height-on-mobile%3D%22100%22%5D%20.vc-fifty__image%20%7B%20max-height%3A%20100px%3B%20%7D%0A%20%20%20%20.vc-fifty%5Bdata-vc-maximum-image-height-on-mobile%3D%22200%22%5D%20.vc-fifty__image%20%7B%20max-height%3A%20200px%3B%20%7D%0A%20%20%20%20.vc-fifty%5Bdata-vc-maximum-image-height-on-mobile%3D%22300%22%5D%20.vc-fifty__image%20%7B%20max-height%3A%20300px%3B%20%7D%0A%20%20%20%20.vc-fifty%5Bdata-vc-maximum-image-height-on-mobile%3D%22400%22%5D%20.vc-fifty__image%20%7B%20max-height%3A%20400px%3B%20%7D%0A%20%20%20%20.vc-fifty%5Bdata-vc-maximum-image-height-on-mobile%3D%22500%22%5D%20.vc-fifty__image%20%7B%20max-height%3A%20500px%3B%20%7D%0A%20%20%20%20.vc-fifty%5Bdata-vc-maximum-image-height-on-mobile%3D%22600%22%5D%20.vc-fifty__image%20%7B%20max-height%3A%20600px%3B%20%7D%0A%20%20%7D%0A%20%20%0A%0A%3C%2Fstyle%3E" />
      <_Builtin.Block
        className={_utils.cx(_styles, "vc-fifty__container")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "vc-fifty__panel",
            "vc-fifty__panel--content"
          )}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "vc-fifty__content-container")}
            tag="div"
          >
            {headingVisibility ? (
              <_Builtin.Heading
                className={_utils.cx(_styles, "vc-fifty__heading")}
                tag="h2"
              >
                {headingText}
              </_Builtin.Heading>
            ) : null}
            {paragraphVisibility ? (
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "vc-paragraph", "is--white")}
              >
                {paragraphText}
              </_Builtin.Paragraph>
            ) : null}
            {richTextVisibility ? (
              <_Builtin.RichText
                className={_utils.cx(_styles, "vc-fifty__rich-text")}
                tag="div"
                slot=""
              >
                {richText}
              </_Builtin.RichText>
            ) : null}
            {buttonVisibility ? (
              <_Builtin.Link
                className={_utils.cx(_styles, "vc-fifty__button")}
                button={false}
                block="inline"
                options={buttonLink}
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "vc-fifty__button-text")}
                  tag="div"
                >
                  {buttonText}
                </_Builtin.Block>
              </_Builtin.Link>
            ) : null}
            <_Builtin.Link
              className={_utils.cx(_styles, "vc-button", "is--inverted-color")}
              id={_utils.cx(
                _styles,
                "w-node-_2038fca7-8830-f7fc-f4de-a17dc712ea9d-25fd14ef"
              )}
              editable={true}
              button={true}
              block=""
              options={{
                href: "https://form.typeform.com/to/UQvp8JUa",
              }}
            >
              {"BUTTONTEXT"}
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(
            _styles,
            "vc-fifty__panel",
            "vc-fifty__panel--image"
          )}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "vc-fifty__image")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src={image}
          />
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
