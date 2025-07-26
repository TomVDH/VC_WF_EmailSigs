"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { VcButtoncheck_mark } from "./VcButton✓";
import * as _utils from "./utils";
import _styles from "./VcSubHero.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-370":{"id":"e-370","name":"","animationType":"custom","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-34","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-371"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a9733682-1ebb-208b-2b4d-755b1c53dacc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a9733682-1ebb-208b-2b4d-755b1c53dacc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752195552992},"e-371":{"id":"e-371","name":"","animationType":"custom","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-35","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-370"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"a9733682-1ebb-208b-2b4d-755b1c53dacc","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"a9733682-1ebb-208b-2b4d-755b1c53dacc","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752195552994},"e-390":{"id":"e-390","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-41","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-391"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fd4dcc53-83d4-346b-96ba-43de0ce07b1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fd4dcc53-83d4-346b-96ba-43de0ce07b1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752275386764},"e-391":{"id":"e-391","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-42","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-390"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"fd4dcc53-83d4-346b-96ba-43de0ce07b1f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"fd4dcc53-83d4-346b-96ba-43de0ce07b1f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752275386764},"e-420":{"id":"e-420","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-421"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68718d4530caafd445705c6e|2b1ff480-3395-194d-faec-cceb59ea67e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68718d4530caafd445705c6e|2b1ff480-3395-194d-faec-cceb59ea67e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752708507714},"e-421":{"id":"e-421","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-420"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"68718d4530caafd445705c6e|2b1ff480-3395-194d-faec-cceb59ea67e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"68718d4530caafd445705c6e|2b1ff480-3395-194d-faec-cceb59ea67e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752708507714},"e-422":{"id":"e-422","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-50","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-423"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6748bbff3532db75dbaf297e|3d32f607-1f61-8976-5064-7f26dc66ecb6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6748bbff3532db75dbaf297e|3d32f607-1f61-8976-5064-7f26dc66ecb6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752708891338},"e-423":{"id":"e-423","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-51","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-422"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6748bbff3532db75dbaf297e|3d32f607-1f61-8976-5064-7f26dc66ecb6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6748bbff3532db75dbaf297e|3d32f607-1f61-8976-5064-7f26dc66ecb6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1752708891338},"e-532":{"id":"e-532","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-64","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-533"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6557bb5d53809623bd8abfe0|beda5100-fdee-da13-a469-6ac71e468326","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6557bb5d53809623bd8abfe0|beda5100-fdee-da13-a469-6ac71e468326","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753384625674},"e-533":{"id":"e-533","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-65","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-532"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"6557bb5d53809623bd8abfe0|beda5100-fdee-da13-a469-6ac71e468326","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"6557bb5d53809623bd8abfe0|beda5100-fdee-da13-a469-6ac71e468326","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753384625674},"e-534":{"id":"e-534","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-535"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|b7193077-ad1f-034a-a8fd-6a24120b286b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|b7193077-ad1f-034a-a8fd-6a24120b286b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753461133105},"e-535":{"id":"e-535","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-534"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|b7193077-ad1f-034a-a8fd-6a24120b286b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|b7193077-ad1f-034a-a8fd-6a24120b286b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753461133105},"e-536":{"id":"e-536","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-537"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|35500234-13cf-be52-8ea7-b62868d49664","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|35500234-13cf-be52-8ea7-b62868d49664","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753461267921},"e-537":{"id":"e-537","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-536"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|35500234-13cf-be52-8ea7-b62868d49664","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|35500234-13cf-be52-8ea7-b62868d49664","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753461267921},"e-538":{"id":"e-538","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-539"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|288221af-b65b-9ac9-45df-60983cd4c80a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|288221af-b65b-9ac9-45df-60983cd4c80a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753461330919},"e-539":{"id":"e-539","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-538"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|288221af-b65b-9ac9-45df-60983cd4c80a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|288221af-b65b-9ac9-45df-60983cd4c80a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753461330919},"e-540":{"id":"e-540","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-541"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|2b5c6fbe-af9c-1981-0e11-43a62057c9f0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|2b5c6fbe-af9c-1981-0e11-43a62057c9f0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753461479933},"e-541":{"id":"e-541","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-540"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|2b5c6fbe-af9c-1981-0e11-43a62057c9f0","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|2b5c6fbe-af9c-1981-0e11-43a62057c9f0","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753461479933},"e-542":{"id":"e-542","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-543"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|a72db6fa-e4c8-9c0a-eb88-6fdeae0cab68","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|a72db6fa-e4c8-9c0a-eb88-6fdeae0cab68","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753461569164},"e-543":{"id":"e-543","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-542"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|a72db6fa-e4c8-9c0a-eb88-6fdeae0cab68","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|a72db6fa-e4c8-9c0a-eb88-6fdeae0cab68","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753461569164},"e-544":{"id":"e-544","name":"","animationType":"preset","eventTypeId":"MOUSE_OVER","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-66","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-545"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|469baa60-2ea1-7d3a-2d2e-ea3c8007ddf9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|469baa60-2ea1-7d3a-2d2e-ea3c8007ddf9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753462712833},"e-545":{"id":"e-545","name":"","animationType":"preset","eventTypeId":"MOUSE_OUT","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-67","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-544"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"67ec1e6dbc26469110a6711c|469baa60-2ea1-7d3a-2d2e-ea3c8007ddf9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"67ec1e6dbc26469110a6711c|469baa60-2ea1-7d3a-2d2e-ea3c8007ddf9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1753462712833}},"actionLists":{"a-34":{"id":"a-34","title":"VC - Line Button (%) 40 -100 ON","actionItemGroups":[{"actionItems":[{"id":"a-34-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-34-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1670427702407},"a-35":{"id":"a-35","title":"VC - Line Button (%) 40-100 OFF","actionItemGroups":[{"actionItems":[{"id":"a-35-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1670427702407},"a-41":{"id":"a-41","title":"Line Button 80 -100 ON 2","actionItemGroups":[{"actionItems":[{"id":"a-41-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":80,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-41-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1670427702407},"a-42":{"id":"a-42","title":"Line Button 80-100 OFF 2","actionItemGroups":[{"actionItems":[{"id":"a-42-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":80,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1670427702407},"a-50":{"id":"a-50","title":"Line Button 80 -100 ON 4","actionItemGroups":[{"actionItems":[{"id":"a-50-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":80,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-50-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1670427702407},"a-51":{"id":"a-51","title":"Line Button 80-100 OFF 4","actionItemGroups":[{"actionItems":[{"id":"a-51-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":80,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1670427702407},"a-64":{"id":"a-64","title":"VC - Line Button (%) 40 -100 ON 3","actionItemGroups":[{"actionItems":[{"id":"a-64-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-64-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1670427702407},"a-65":{"id":"a-65","title":"VC - Line Button (%) 40-100 OFF 3","actionItemGroups":[{"actionItems":[{"id":"a-65-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1670427702407},"a-66":{"id":"a-66","title":"VC - Line Button (%) 40 -100 ON 4","actionItemGroups":[{"actionItems":[{"id":"a-66-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]},{"actionItems":[{"id":"a-66-n-2","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":100,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":true,"createdOn":1670427702407},"a-67":{"id":"a-67","title":"VC - Line Button (%) 40-100 OFF 4","actionItemGroups":[{"actionItems":[{"id":"a-67-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":300,"target":{"useEventTarget":"CHILDREN","selector":".button-underline","selectorGuids":["1b810948-0fbb-ccfe-80cd-d8ffd089c9e2"]},"widthValue":0,"widthUnit":"%","heightUnit":"PX","locked":false}}]}],"useFirstGroupAsInitialState":false,"createdOn":1670427702407}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function VcSubHero({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component
      className={_utils.cx(_styles, "oz-section")}
      grid={{
        type: "section",
      }}
      tag="section"
    >
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "oz-container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Image
          loading="lazy"
          width="85"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/6723be2ca5a8642ced28e55b_VC_ico_Building.svg"
        />
        <_Builtin.Heading className={_utils.cx(_styles, "heading")} tag="h2">
          {"Discover Our Menus"}
        </_Builtin.Heading>
      </_Builtin.BlockContainer>
      <_Builtin.BlockContainer
        className={_utils.cx(_styles, "oz-container")}
        grid={{
          type: "container",
        }}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "menu-buttons")}
          tag="div"
        >
          <VcButtoncheck_mark
            variant="Wired (Dark)"
            buttonSettingsText="BREAKFAST MENU"
            buttonSettingsLink={{
              href: "/food-and-beverage/menu/breakfast",
              target: "_blank",
            }}
          />
          <VcButtoncheck_mark
            variant="Wired (Dark)"
            buttonSettingsText="LUNCH MENU"
            buttonSettingsLink={{
              href: "/food-and-beverage/menu/lunch",
              target: "_blank",
            }}
          />
          <VcButtoncheck_mark
            variant="Wired (Dark)"
            buttonSettingsText="DINNER MENU"
            buttonSettingsLink={{
              href: "/food-and-beverage/menu/dinner",
              target: "_blank",
            }}
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "oz-button-wrap", "wired-dark")}
            id={_utils.cx(
              _styles,
              "w-node-fd4dcc53-83d4-346b-96ba-43de0ce07b1f-0ce07b12"
            )}
            data-w-id="fd4dcc53-83d4-346b-96ba-43de0ce07b1f"
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "oz-button", "wired-dark")}
              id={_utils.cx(
                _styles,
                "w-node-fd4dcc53-83d4-346b-96ba-43de0ce07b20-0ce07b12"
              )}
              button={true}
              editable={true}
              block=""
              options={{
                href: "/weddings",
                target: "_blank",
              }}
            >
              {"POURS & PLATES MENU"}
            </_Builtin.Link>
            <_Builtin.Block
              className={_utils.cx(
                _styles,
                "button-underline",
                "_80",
                "wired-dark-3"
              )}
              tag="div"
            />
          </_Builtin.Block>
          <VcButtoncheck_mark
            variant="Wired (Dark)"
            buttonSettingsText="DAILY FEATURES"
            buttonSettingsLink={{
              href: "/food-and-beverage/menu/daily-features",
              target: "_blank",
            }}
          />
          <VcButtoncheck_mark
            variant="Wired (Dark)"
            buttonSettingsText="KIDS MENU"
            buttonSettingsLink={{
              href: "/food-and-beverage/menu/kids",
              target: "_blank",
            }}
          />
        </_Builtin.Block>
        <_Builtin.Image
          className={_utils.cx(_styles, "oz-fleuron")}
          loading="lazy"
          width="200"
          height="auto"
          alt=""
          src="https://cdn.prod.website-files.com/6557bb5d53809623bd8abf36/685ef5f2bc995ca8ea708d31_VC-Div_B_Black.svg"
        />
      </_Builtin.BlockContainer>
    </_Component>
  );
}
