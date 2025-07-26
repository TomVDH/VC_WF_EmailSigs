"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./VcHeaderNotice✓.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-412":{"id":"e-412","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-39","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-413"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"ab7d0145-3c86-ffa2-5a3c-4fcdb5aa68e8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"ab7d0145-3c86-ffa2-5a3c-4fcdb5aa68e8","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752202701092}},"actionLists":{"a-39":{"id":"a-39","title":"OZ Nav Button Slide OUT","actionItemGroups":[{"actionItems":[{"id":"a-39-n","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}},{"id":"a-39-n-2","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{},"value":0,"unit":""}},{"id":"a-39-n-3","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".header-burger.vc_nav--sticky-right.vc_nav--open","selectorGuids":["6712a01b-7575-3c19-81bc-7ca1bc336bf3","1b014fec-5625-5dfa-8749-14ec0afa310e","3b433052-e22a-6e14-b032-00bc14b8bd03"]},"xValue":0,"yValue":0,"zValue":0,"xUnit":"px","yUnit":"px","zUnit":"px"}}]},{"actionItems":[{"id":"a-39-n-4","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"inOutQuad","duration":700,"target":{"selector":".header-burger.vc_nav--sticky-right.vc_nav--open","selectorGuids":["6712a01b-7575-3c19-81bc-7ca1bc336bf3","1b014fec-5625-5dfa-8749-14ec0afa310e","3b433052-e22a-6e14-b032-00bc14b8bd03"]},"xValue":50,"xUnit":"px","yUnit":"PX","zUnit":"PX"}},{"id":"a-39-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"inOutQuad","duration":700,"target":{"selector":".header-burger.vc_nav--sticky-right.vc_nav--open","selectorGuids":["6712a01b-7575-3c19-81bc-7ca1bc336bf3","1b014fec-5625-5dfa-8749-14ec0afa310e","3b433052-e22a-6e14-b032-00bc14b8bd03"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-39-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"inOutQuad","duration":700,"target":{},"value":1,"unit":""}},{"id":"a-39-n-7","actionTypeId":"GENERAL_DISPLAY","config":{"delay":600,"easing":"","duration":0,"target":{},"value":"flex"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1730354928255}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VcHeaderNoticecheck_mark({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "oz-header", "is--notice")}
      tag="div"
    >
      <_Builtin.NavbarWrapper
        className={_utils.cx(_styles, "header-bar-notice", "is--notice")}
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
          className={_utils.cx(_styles, "header-wrapper", "is--notice")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "header-emblem", "is--notice")}
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
          <_Builtin.Block
            className={_utils.cx(_styles, "header-notice", "is--notice-on")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "oz-paragraph", "is--smaller-type")}
              tag="div"
            >
              {
                "This is a staging version of the site. Site may behave unexpectedly."
              }
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(
              _styles,
              "header-nav-toggle",
              "is--nav-closed",
              "is--notice"
            )}
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
      <_Builtin.HtmlEmbed value="%3Cscript%3E%0A(function()%20%7B%0A%20%20%20%20console.log('Script%20started')%3B%0A%20%20%20%20console.log('Current%20hostname%3A'%2C%20window.location.hostname)%3B%0A%20%20%20%20%0A%20%20%20%20function%20initStagingNotice()%20%7B%0A%20%20%20%20%20%20%20%20console.log('initStagingNotice%20function%20called')%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%2F%2F%20Target%20the%20specific%20staging%20notice%20with%20combo%20class%0A%20%20%20%20%20%20%20%20const%20stagingNotice%20%3D%20document.querySelector('.header-notice.is--notice-on')%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20console.log('Found%20staging%20notice%20element%3A'%2C%20!!stagingNotice)%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20if%20(!stagingNotice)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.warn('No%20element%20with%20class%20%22header-notice%20is--notice-on%22%20found')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%2F%2F%20Check%20if%20we're%20on%20staging%20domain%0A%20%20%20%20%20%20%20%20if%20(window.location.hostname%20%3D%3D%3D%20'vancouverclub-staging.webflow.io')%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log('%E2%9C%93%20Staging%20environment%20detected%20-%20setting%20display%20to%20flex')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20stagingNotice.style.display%20%3D%20'flex'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log('Staging%20notice%20display%20set%20to%3A'%2C%20stagingNotice.style.display)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log('%E2%9C%97%20Production%20environment%20-%20keeping%20display%3A%20none')%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20stagingNotice.style.display%20%3D%20'none'%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log('Staging%20notice%20display%20set%20to%3A'%2C%20stagingNotice.style.display)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20%0A%20%20%20%20%2F%2F%20Run%20when%20DOM%20is%20ready%0A%20%20%20%20if%20(document.readyState%20%3D%3D%3D%20'loading')%20%7B%0A%20%20%20%20%20%20%20%20console.log('DOM%20still%20loading%2C%20adding%20event%20listener')%3B%0A%20%20%20%20%20%20%20%20document.addEventListener('DOMContentLoaded'%2C%20initStagingNotice)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20console.log('DOM%20already%20loaded%2C%20running%20immediately')%3B%0A%20%20%20%20%20%20%20%20initStagingNotice()%3B%0A%20%20%20%20%7D%0A%7D)()%3B%0A%3C%2Fscript%3E" />
    </_Component>
  );
}
