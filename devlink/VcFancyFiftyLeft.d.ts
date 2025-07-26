import * as React from "react";
import * as Types from "./types";

declare function VcFancyFiftyLeft(props: {
  as?: React.ElementType;
  variant?: "Base" | "Weddings";
  headingVariant?: "Default" | "Light (Normal)" | "Green (Weddings)";
  headingEnableSubHeading?: Types.Visibility.VisibilityConditions;
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
  imageImage?: Types.Asset.Image;
}): React.JSX.Element;
