"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { VcButtoncheck_mark } from "./VcButton✓";
import * as _utils from "./utils";
import _styles from "./VcFooter✓.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-418":{"id":"e-418","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-49","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-419"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e4bdfc64-efc9-65b1-37f2-75850b21321d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e4bdfc64-efc9-65b1-37f2-75850b21321d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752700101472},"e-448":{"id":"e-448","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"SLIDE_EFFECT","instant":false,"config":{"actionListId":"slideInBottom","autoStopEventId":"e-449"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ff4ab3ad-a559-e02b-f9ba-68da65563237","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ff4ab3ad-a559-e02b-f9ba-68da65563237","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":248,"direction":"BOTTOM","effectIn":true},"createdOn":1752733234349}},"actionLists":{"a-49":{"id":"a-49","title":"VC - Footer Glow ON","actionItemGroups":[{"actionItems":[{"id":"a-49-n-2","actionTypeId":"PLUGIN_VARIABLE","config":{"delay":0,"easing":"","duration":500,"value":{},"target":{"useEventTarget":"PARENT","selector":".oz-footer.is--glow","selectorGuids":["57b7cb6c-9243-68f4-65d2-35515737eca0","53b0bf7f-affb-4391-24ba-ac1fc0264d89"]}}}]}],"useFirstGroupAsInitialState":false,"createdOn":1752700171778},"slideInBottom":{"id":"slideInBottom","useFirstGroupAsInitialState":true,"actionItemGroups":[{"actionItems":[{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":0}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"duration":0,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":100,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}}]},{"actionItems":[{"actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"xValue":0,"yValue":0,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":1000,"target":{"id":"N/A","appliesTo":"TRIGGER_ELEMENT","useEventTarget":true},"value":1}}]}]}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VcFootercheck_mark({
  as: _Component = _Builtin.Section,
  variant = "Default",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Default: "",
    Weddings: "w-variant-24338185-f37d-c7b8-c349-e15612938669",
    Horizontal: "w-variant-186ceea6-2262-f23d-6040-cd9a80bcd9df",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(
        _styles,
        "oz-footer",
        "is--glow",
        _activeStyleVariant
      )}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.Block
        className={_utils.cx(_styles, "footer-wrapper", _activeStyleVariant)}
        data-w-id="ff4ab3ad-a559-e02b-f9ba-68da65563237"
        tag="div"
      >
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "oz-container", _activeStyleVariant)}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Link
            className={_utils.cx(_styles, "heading-17", _activeStyleVariant)}
            button={false}
            block=""
            options={{
              href: "#",
            }}
          >
            {"604.685.9321"}
          </_Builtin.Link>
        </_Builtin.BlockContainer>
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "oz-container", _activeStyleVariant)}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-main", _activeStyleVariant)}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "links", _activeStyleVariant)}
              tag="div"
            >
              <VcButtoncheck_mark
                buttonSettingsText="Membership"
                buttonSettingsLink={{
                  href: "#",
                }}
                variant="Navigation Links"
              />
              <VcButtoncheck_mark
                buttonSettingsText="Food & Beverage"
                buttonSettingsLink={{
                  href: "#",
                }}
                variant="Navigation Links"
              />
              <VcButtoncheck_mark
                buttonSettingsText="Events"
                buttonSettingsLink={{
                  href: "#",
                }}
                variant="Navigation Links"
              />
              <VcButtoncheck_mark
                buttonSettingsText="Weddings"
                buttonSettingsLink={{
                  href: "#",
                }}
                variant="Navigation Links"
              />
              <VcButtoncheck_mark
                buttonSettingsText="Health & Wellness"
                buttonSettingsLink={{
                  href: "#",
                }}
                variant="Navigation Links"
              />
              <VcButtoncheck_mark
                buttonSettingsText="Travel"
                buttonSettingsLink={{
                  href: "#",
                }}
                variant="Navigation Links"
              />
              <VcButtoncheck_mark
                buttonSettingsText="Accommodations"
                buttonSettingsLink={{
                  href: "#",
                }}
                variant="Navigation Links"
              />
              <VcButtoncheck_mark
                buttonSettingsText="Art Collection"
                buttonSettingsLink={{
                  href: "#",
                }}
                variant="Navigation Links"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "links-sub", _activeStyleVariant)}
              tag="div"
            >
              <VcButtoncheck_mark
                variant="Sub-Navigation Links"
                buttonSettingsText="Member Login"
                buttonSettingsLink={{
                  href: "https://members.vanclub.com/",
                  target: "_blank",
                }}
              />
              <VcButtoncheck_mark
                variant="Sub-Navigation Links"
                buttonSettingsText="Contact The Club"
                buttonSettingsLink={{
                  href: "#",
                }}
                enableButton={true}
              />
              <VcButtoncheck_mark
                variant="Sub-Navigation Links"
                buttonSettingsText="Hours of Service"
                buttonSettingsLink={{
                  href: "#",
                }}
                enableButton={true}
              />
              <VcButtoncheck_mark
                variant="Sub-Navigation Links"
                buttonSettingsText="Dress Code"
                buttonSettingsLink={{
                  href: "https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/663d1098742c9c20c73180f2_Members%27%20Dress%20Code%20-%20A%20Style%20Guide%20S_S%202024%20(May%208%2C%202024).pdf",
                }}
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "c-nav_sociall-white",
                _activeStyleVariant
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "link-block",
                  _activeStyleVariant
                )}
                button={false}
                block="inline"
                options={{
                  href: "https://www.instagram.com/vancouverclub/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "social-media-icon",
                    _activeStyleVariant
                  )}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/6557bb5d53809623bd8abf8f_Symbol.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(
                  _styles,
                  "link-block",
                  _activeStyleVariant
                )}
                button={false}
                block="inline"
                options={{
                  href: "https://www.linkedin.com/company/the-vancouver-club/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "social-media-icon",
                    _activeStyleVariant
                  )}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/6557bb5d53809623bd8abf99_Symbol-2.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                button={false}
                block="inline"
                options={{
                  href: "https://www.facebook.com/vancouverclub/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "social-media-icon",
                    _activeStyleVariant
                  )}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/6557bb5d53809623bd8abf91_Symbol-1.svg"
                />
              </_Builtin.Link>
              <_Builtin.Link
                button={false}
                block="inline"
                options={{
                  href: "https://ca.pinterest.com/vancouverclub/",
                  target: "_blank",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(
                    _styles,
                    "social-media-icon",
                    _activeStyleVariant
                  )}
                  width="auto"
                  height="auto"
                  loading="lazy"
                  alt=""
                  src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/68505d60e402ae84be86c5a3_Pinterest%20Logo.svg"
                />
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
        <_Builtin.BlockContainer
          className={_utils.cx(
            _styles,
            "sticky-container",
            "is--footer",
            _activeStyleVariant
          )}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "crest-tricolumn",
              _activeStyleVariant
            )}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "crest-link", _activeStyleVariant)}
              data-w-id="e4bdfc64-efc9-65b1-37f2-75850b21321d"
              button={false}
              block="inline"
              options={{
                href: "#",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(
                  _styles,
                  "vc_footer__logo",
                  _activeStyleVariant
                )}
                editable={false}
                width="150"
                height="auto"
                loading="eager"
                id="footer-beaver"
                alt=""
                src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/6716daef43f2eda698b7c5cd_inv_VC_Crest%400.75x.png"
              />
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Link
            button={false}
            block="inline"
            options={{
              href: "https://www.platinumclubnet.com/",
              target: "_blank",
            }}
          >
            <_Builtin.Image
              loading="lazy"
              width="200"
              height="auto"
              alt=""
              src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/68755978ad8f8782c3c1f558_5star-tvc.png"
            />
          </_Builtin.Link>
          <_Builtin.Block
            className={_utils.cx(_styles, "text-block-32", _activeStyleVariant)}
            tag="div"
          >
            {
              "The Vancouver Club is located on the traditional, ancestral and unceded territory of the sḵwx̱ wú7mesh (Squamish), sel̓íl̓witulh (Tsleil-Waututh) and xʷməθkʷəy̓ əm (Musqueam) nations."
            }
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "text-block-31",
                _activeStyleVariant
              )}
              tag="div"
            >
              {"2025 © The Vancouver Club"}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.Block>
    </_Component>
  );
}
