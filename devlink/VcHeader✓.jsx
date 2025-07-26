"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./VcHeader✓.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-352":{"id":"e-352","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-353"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"682cc78d8fc768e854f592b4|003d71c9-1da0-6af2-9a30-0c43c8ae9018","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"682cc78d8fc768e854f592b4|003d71c9-1da0-6af2-9a30-0c43c8ae9018","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747765193664},"e-356":{"id":"e-356","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-24","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-357"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"682cca43a3fd55630f3860f3|003d71c9-1da0-6af2-9a30-0c43c8ae9018","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"682cca43a3fd55630f3860f3|003d71c9-1da0-6af2-9a30-0c43c8ae9018","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1747765828284},"e-412":{"id":"e-412","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-413"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ab7d0145-3c86-ffa2-5a3c-4fcdb5aa68e8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ab7d0145-3c86-ffa2-5a3c-4fcdb5aa68e8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752202701092},"e-468":{"id":"e-468","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-469"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a5245e53-fefe-e2b2-1dce-82505bcee880","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a5245e53-fefe-e2b2-1dce-82505bcee880","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752824449672},"e-470":{"id":"e-470","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-471"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"75d2eeff-c95f-e738-aa41-7d0b9939958c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"75d2eeff-c95f-e738-aa41-7d0b9939958c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752825319037},"e-478":{"id":"e-478","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-479"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"de593140-d934-1af4-a599-4fe85c523e6b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de593140-d934-1af4-a599-4fe85c523e6b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752828404418},"e-492":{"id":"e-492","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-493"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"dd7a8978-56a3-db2b-0a18-673373dd756d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"dd7a8978-56a3-db2b-0a18-673373dd756d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752869170744},"e-494":{"id":"e-494","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-57","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-495"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"de593140-d934-1af4-a599-4fe85c523e41","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"de593140-d934-1af4-a599-4fe85c523e41","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752869268379},"e-528":{"id":"e-528","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-56","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-529"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"7039989f-6f37-713f-afff-c32018cbffb9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"7039989f-6f37-713f-afff-c32018cbffb9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753308611899},"e-560":{"id":"e-560","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-561"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6557bb5d53809623bd8abfdd|aca24ee8-bba8-3d5a-da91-1afb8bc1ac60","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6557bb5d53809623bd8abfdd|aca24ee8-bba8-3d5a-da91-1afb8bc1ac60","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753486104453}},"actionLists":{"a-24":{"id":"a-24","title":"OZ NAV MODAL IN","actionItemGroups":[{"actionItems":[{"id":"a-24-n","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".modal-background","selectorGuids":["abe8ef77-65a4-ed3a-a50c-695c5c635634"]},"value":0,"unit":""}},{"id":"a-24-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".links-container.vc_nav__menu--header","selectorGuids":["c2bec2a6-6171-da0c-b265-daf96f89e5d3","3772584f-1732-989a-e50f-e459d2c76639"]},"value":0,"unit":""}},{"id":"a-24-n-5","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":"none"}},{"id":"a-24-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header-container.is--header-modal","selectorGuids":["b0590e65-fb17-26dd-0726-f5b2a943b5ad","cfca941f-6028-e3ea-32e7-4771795c2fa0"]},"value":0,"unit":""}},{"id":"a-24-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeIn","duration":900,"target":{"selector":".modal-background","selectorGuids":["abe8ef77-65a4-ed3a-a50c-695c5c635634"]},"value":0,"unit":""}},{"id":"a-24-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".image-34","selectorGuids":["cf695558-ab05-9c73-b66e-102560832d11"]},"value":0,"unit":""}},{"id":"a-24-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header-bar.is--modal","selectorGuids":["4fccfe06-4835-857d-392e-9279c976f041","f2639d1c-a00b-4e11-6ca1-1a5a034332dc"]},"value":0,"unit":""}},{"id":"a-24-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-24-n-10","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":"flex"}},{"id":"a-24-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inQuart","duration":900,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":1,"unit":""}},{"id":"a-24-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inQuart","duration":900,"target":{"selector":".links-container.vc_nav__menu--header","selectorGuids":["c2bec2a6-6171-da0c-b265-daf96f89e5d3","3772584f-1732-989a-e50f-e459d2c76639"]},"value":1,"unit":""}},{"id":"a-24-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inQuart","duration":900,"target":{"selector":".header-container.is--header-modal","selectorGuids":["b0590e65-fb17-26dd-0726-f5b2a943b5ad","cfca941f-6028-e3ea-32e7-4771795c2fa0"]},"value":1,"unit":""}},{"id":"a-24-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inQuart","duration":900,"target":{"selector":".modal-background","selectorGuids":["abe8ef77-65a4-ed3a-a50c-695c5c635634"]},"value":1,"unit":""}},{"id":"a-24-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inQuart","duration":900,"target":{"selector":".image-34","selectorGuids":["cf695558-ab05-9c73-b66e-102560832d11"]},"value":1,"unit":""}},{"id":"a-24-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"inQuart","duration":900,"target":{"selector":".header-bar.is--modal","selectorGuids":["4fccfe06-4835-857d-392e-9279c976f041","f2639d1c-a00b-4e11-6ca1-1a5a034332dc"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1730356659636},"a-39":{"id":"a-39","title":"OZ Nav Button Slide OUT","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-39-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-39-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header-burger.vc_nav--sticky-right.vc_nav--open","selectorGuids":["6712a01b-7575-3c19-81bc-7ca1bc336bf3","1b014fec-5625-5dfa-8749-14ec0afa310e","3b433052-e22a-6e14-b032-00bc14b8bd03"]},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}}]},{"actionItems":[{"id":"a-39-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuad","duration":700,"target":{"selector":".header-burger.vc_nav--sticky-right.vc_nav--open","selectorGuids":["6712a01b-7575-3c19-81bc-7ca1bc336bf3","1b014fec-5625-5dfa-8749-14ec0afa310e","3b433052-e22a-6e14-b032-00bc14b8bd03"]},"xValue":50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-39-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"inOutQuad","duration":700,"target":{"selector":".header-burger.vc_nav--sticky-right.vc_nav--open","selectorGuids":["6712a01b-7575-3c19-81bc-7ca1bc336bf3","1b014fec-5625-5dfa-8749-14ec0afa310e","3b433052-e22a-6e14-b032-00bc14b8bd03"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-39-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"inOutQuad","duration":700,"target":{},"value":1,"unit":""}},{"id":"a-39-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":600,"easing":"","duration":0,"target":{},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1730354928255},"a-54":{"id":"a-54","title":"OZ NAV MODAL OUT","actionItemGroups":[{"actionItems":[{"id":"a-54-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".header-bar.is--modal","selectorGuids":["4fccfe06-4835-857d-392e-9279c976f041","f2639d1c-a00b-4e11-6ca1-1a5a034332dc"]},"value":1,"unit":""}},{"id":"a-54-n-8","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":900,"target":{"selector":".links-container.vc_nav__menu--header","selectorGuids":["c2bec2a6-6171-da0c-b265-daf96f89e5d3","3772584f-1732-989a-e50f-e459d2c76639"]},"value":1,"unit":""}},{"id":"a-54-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":900,"target":{"selector":".modal-background","selectorGuids":["abe8ef77-65a4-ed3a-a50c-695c5c635634"]},"value":1,"unit":""}},{"id":"a-54-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-54-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"outQuart","duration":900,"target":{"selector":".header-container.is--header-modal","selectorGuids":["b0590e65-fb17-26dd-0726-f5b2a943b5ad","cfca941f-6028-e3ea-32e7-4771795c2fa0"]},"value":0,"unit":""}},{"id":"a-54-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"outQuart","duration":900,"target":{"selector":".image-34","selectorGuids":["cf695558-ab05-9c73-b66e-102560832d11"]},"value":0,"unit":""}},{"id":"a-54-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"outQuart","duration":900,"target":{"useEventTarget":"PARENT","selector":".header-bar.is--modal","selectorGuids":["4fccfe06-4835-857d-392e-9279c976f041","f2639d1c-a00b-4e11-6ca1-1a5a034332dc"]},"value":0,"unit":""}},{"id":"a-54-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"outQuart","duration":900,"target":{"selector":".links-container.vc_nav__menu--header","selectorGuids":["c2bec2a6-6171-da0c-b265-daf96f89e5d3","3772584f-1732-989a-e50f-e459d2c76639"]},"value":0,"unit":""}},{"id":"a-54-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"outQuart","duration":900,"target":{"selector":".modal-background","selectorGuids":["abe8ef77-65a4-ed3a-a50c-695c5c635634"]},"value":0,"unit":""}},{"id":"a-54-n-19","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"outQuart","duration":900,"target":{"useEventTarget":"PARENT","selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":0,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1730356659636},"a-56":{"id":"a-56","title":"OZ NAV MODAL SIMPLE IN","actionItemGroups":[{"actionItems":[{"id":"a-56-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":"none"}},{"id":"a-56-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-56-n-9","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":"flex"}},{"id":"a-56-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1730356659636},"a-57":{"id":"a-57","title":"OZ NAV MODAL SIMPLE OUT","actionItemGroups":[{"actionItems":[{"id":"a-57-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"PARENT","selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":1,"unit":""}},{"id":"a-57-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".modal-background","selectorGuids":["abe8ef77-65a4-ed3a-a50c-695c5c635634"]},"value":1,"unit":""}}]},{"actionItems":[{"id":"a-57-n-10","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"outQuart","duration":0,"target":{"useEventTarget":"PARENT","selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":0,"unit":""}},{"id":"a-57-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".modal-background","selectorGuids":["abe8ef77-65a4-ed3a-a50c-695c5c635634"]},"value":0,"unit":""}},{"id":"a-57-n-13","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"PARENT","selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":"none"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1730356659636},"a-69":{"id":"a-69","title":"OZ NAV MODAL SIMPLE IN 4","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":"none"}},{"id":"a-69-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-69-n-3","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":"flex"}},{"id":"a-69-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"selector":".header-modal","selectorGuids":["232368bd-fc90-17cd-a0a5-09eba8ed8fcc"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1730356659636}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VcHeadercheck_mark({
  as: _Component = _Builtin.Block,
  maintenanceNoticeEnableNotice = true,
  maintenanceNoticeNotice = "Our site is currently undergoing upgrades. Some inconsistencies may occur. We apologize for the inconvenience as we'll have a new site experience ready shortly.",
}) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "oz-header")} tag="div">
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "header-bar")}
        tag="div"
        id="vc-navbar"
        config={{
          easing: "ease",
          easing2: "ease",
          duration: 400,
          docHeight: false,
          noScroll: false,
          animation: "over-right",
          collapse: "all",
        }}
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "header-wrapper")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "header-emblem")}
            tag="div"
          >
            <_Builtin.NavbarBrand
              className={_utils.cx(_styles, "header-logo")}
              options={{
                href: "#",
              }}
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "vc-logo__bg")}
                tag="div"
              />
            </_Builtin.NavbarBrand>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block-33", "is--tvc")}
              tag="div"
            >
              {"The Vancouver Club"}
            </_Builtin.Block>
          </_Builtin.Block>
          {maintenanceNoticeEnableNotice ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "header-notice")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "oz-paragraph",
                  "is--smaller-type"
                )}
                tag="div"
              >
                {maintenanceNoticeNotice}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "header-nav-toggle",
              "is--nav-closed"
            )}
            data-w-id="dd7a8978-56a3-db2b-0a18-673373dd756d"
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "nav-toggle-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(
                  _styles,
                  "header-nav-tag",
                  "text-block-33"
                )}
                tag="div"
              >
                {"Menu"}
              </_Builtin.Block>
              <_Builtin.NavbarBrand
                className={_utils.cx(
                  _styles,
                  "header-burger",
                  "vc_nav--sticky-right",
                  "vc_nav--open"
                )}
                options={{
                  href: "#",
                }}
              />
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.NavbarWrapper>
    </_Component>
  );
}
