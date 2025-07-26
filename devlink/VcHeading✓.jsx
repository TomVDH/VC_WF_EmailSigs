"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./VcHeading✓.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-326":{"id":"e-326","name":"","animationType":"custom","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-327"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".standard-tab","originalId":"67929136ffa519fd5cdbff43|8989cbbb-e7f1-215a-dd38-f9329dba4ec8","appliesTo":"CLASS"},"targets":[{"selector":".standard-tab","originalId":"67929136ffa519fd5cdbff43|8989cbbb-e7f1-215a-dd38-f9329dba4ec8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1582253271996},"e-327":{"id":"e-327","name":"","animationType":"custom","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-30","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-326"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".standard-tab","originalId":"67929136ffa519fd5cdbff43|8989cbbb-e7f1-215a-dd38-f9329dba4ec8","appliesTo":"CLASS"},"targets":[{"selector":".standard-tab","originalId":"67929136ffa519fd5cdbff43|8989cbbb-e7f1-215a-dd38-f9329dba4ec8","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1582253271997}},"actionLists":{"a-53":{"id":"a-53","title":"VC CTA Slider IN (Group)","actionItemGroups":[{"actionItems":[{"id":"a-53-n-3","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":9000,"target":{"selector":".slider-background","selectorGuids":["56188534-2a93-3948-ecaf-9fcdf4ef245e"]},"xValue":1.1,"yValue":1.1,"locked":true}},{"id":"a-53-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".load-bar","selectorGuids":["56188534-2a93-3948-ecaf-9fcdf4ef246a"]},"value":0,"unit":""}},{"id":"a-53-n-7","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".load-bar","selectorGuids":["56188534-2a93-3948-ecaf-9fcdf4ef246a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-53-n-15","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".oz-heading.slider-heading.is--m-centered","selectorGuids":["1bcf500e-32bf-a515-7f79-eda7f8877eaf","14baed56-953c-c192-18a1-7946d5018ecd","aa427ff5-e919-bf77-c14f-4088cda5c319"]},"yValue":75,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-53-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".oz-heading.slider-heading.is--m-centered","selectorGuids":["1bcf500e-32bf-a515-7f79-eda7f8877eaf","14baed56-953c-c192-18a1-7946d5018ecd","aa427ff5-e919-bf77-c14f-4088cda5c319"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-53-n-8","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":9000,"target":{"useEventTarget":"CHILDREN","selector":".load-bar","selectorGuids":["56188534-2a93-3948-ecaf-9fcdf4ef246a"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-53-n-9","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"easeOut","duration":6500,"target":{"selector":".slider-background","selectorGuids":["56188534-2a93-3948-ecaf-9fcdf4ef245e"]},"xValue":1.15,"yValue":1.15,"locked":true}},{"id":"a-53-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".oz-heading.slider-heading.is--m-centered","selectorGuids":["1bcf500e-32bf-a515-7f79-eda7f8877eaf","14baed56-953c-c192-18a1-7946d5018ecd","aa427ff5-e919-bf77-c14f-4088cda5c319"]},"value":1,"unit":""}},{"id":"a-53-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":500,"target":{"selector":".load-bar","selectorGuids":["56188534-2a93-3948-ecaf-9fcdf4ef246a"]},"value":1,"unit":""}},{"id":"a-53-n-17","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".oz-heading.slider-heading.is--m-centered","selectorGuids":["1bcf500e-32bf-a515-7f79-eda7f8877eaf","14baed56-953c-c192-18a1-7946d5018ecd","aa427ff5-e919-bf77-c14f-4088cda5c319"]},"yValue":0,"xUnit":"PX","yUnit":"px","zUnit":"PX"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1582253318412},"a-30":{"id":"a-30","title":"(TAB) Click [out]","actionItemGroups":[{"actionItems":[{"id":"a-30-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".load-bar","selectorGuids":["56188534-2a93-3948-ecaf-9fcdf4ef246a"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}},{"id":"a-30-n-2","actionTypeId":"TRANSFORM_SCALE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".slider-background","selectorGuids":["56188534-2a93-3948-ecaf-9fcdf4ef245e"]},"xValue":1,"yValue":1,"locked":true}},{"id":"a-30-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"selector":".slider-heading","selectorGuids":["56188534-2a93-3948-ecaf-9fcdf4ef2463"]},"yValue":35,"xUnit":"PX","yUnit":"PX","zUnit":"PX"}},{"id":"a-30-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeOut","duration":300,"target":{"selector":".slider-heading","selectorGuids":["56188534-2a93-3948-ecaf-9fcdf4ef2463"]},"value":0,"unit":""}},{"id":"a-30-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":300,"target":{"id":"687844f7a8266d85eb745afb|9de91f84-837a-60ac-68b9-ad0894f4840a"},"yValue":35,"xUnit":"PX","yUnit":"px","zUnit":"PX"}},{"id":"a-30-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":300,"target":{"id":"687844f7a8266d85eb745afb|9de91f84-837a-60ac-68b9-ad0894f4840a"},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1582253318412}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VcHeadingcheck_mark({
  as: _Component = _Builtin.Block,
  variant = "Default",
  headingOptionsHeadingLevel = "h2",
  headingOptionsEnableSubHeading,
  headingContentHeadingText = "This is the default text value",
  headingContentSubHeadingText = "This is the default text value",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  const _styleVariantMap = {
    Default: "",
    "Light (Normal)": "w-variant-a87e8149-7686-88ea-38ad-08215b64b50e",
    "Green (Weddings)": "w-variant-fbd29cd3-f5f3-ec45-f1fe-9a716f85afd7",
  };

  const _activeStyleVariant = _styleVariantMap[variant];

  return (
    <_Component
      className={_utils.cx(_styles, "oz-heading", _activeStyleVariant)}
      tag="div"
    >
      <_Builtin.Heading
        className={_utils.cx(_styles, "heading", _activeStyleVariant)}
        tag="h2"
      >
        {headingContentHeadingText}
      </_Builtin.Heading>
      {headingOptionsEnableSubHeading ? (
        <_Builtin.Heading
          className={_utils.cx(_styles, "sub-heading", _activeStyleVariant)}
          tag="h3"
        >
          {headingContentSubHeadingText}
        </_Builtin.Heading>
      ) : null}
    </_Component>
  );
}
