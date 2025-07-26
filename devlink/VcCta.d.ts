import * as React from "react";
import * as Types from "./types";

declare function VcCta(props: {
  as?: React.ElementType;
  variant?: "Default" | "Default (Dark)" | "Full Width";
  headingVariant?:
    | "Default"
    | "Default (White)"
    | "Default (Gray)"
    | "Default (Pewter)"
    | "Weddings (White)";
  headingEnableSubHeading?: Types.Visibility.VisibilityConditions;
  headingHeadingLevel?: Types.Basic.HeadingTag;
  headingSubHeadingLevel?: Types.Basic.HeadingTag;
  headingHeadingText?: React.ReactNode;
  headingSubHeadingText?: React.ReactNode;
  paragraphVariant?: "Default" | "Default (White)" | "Default (Gray)";
  paragraphText?: React.ReactNode;
  paragraphVisibility?: Types.Visibility.VisibilityConditions;
  buttonVariant?:
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
  buttonEnableButton?: Types.Visibility.VisibilityConditions;
  buttonButtonAnalyticsId?: Types.Basic.IdTextInput;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  imageVisibility?: Types.Visibility.VisibilityConditions;
  imageImage?: Types.Asset.Image;
}): React.JSX.Element;
