import * as React from "react";
import * as Types from "./types";

declare function VcButtoncheck_mark(props: {
  as?: React.ElementType;
  variant?:
    | "Default (Black)"
    | "Default (White)"
    | "Default (Green)"
    | "Default (Pewter)"
    | "Wire (Hero)"
    | "Wired (Dark)"
    | "Wired (Dark) FW"
    | "Wired (Light)"
    | "Underline (Purple)"
    | "Underline (Mono)"
    | "Underline Light (Mono)"
    | "Underline Light (Purple)"
    | "Navigation Links"
    | "Sub-Navigation Links";
  enableButton?: Types.Visibility.VisibilityConditions;
  buttonAnalyticsId?: Types.Basic.IdTextInput;
  buttonSettingsText?: React.ReactNode;
  buttonSettingsLink?: Types.Basic.Link;
}): React.JSX.Element;
