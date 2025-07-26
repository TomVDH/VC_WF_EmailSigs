import * as React from "react";
import * as Types from "./types";

declare function VcFiftyLeftcheck_mark(props: {
  as?: React.ElementType;
  variant?: "Default" | "Paper" | "Dark" | "Green" | "Pewter";
  backgroundImage?: Types.Asset.Image;
  headingHeadingVariant?: "Default" | "Light (Normal)" | "Green (Weddings)";
  headingHeadingLevel?: Types.Basic.HeadingTag;
  headingEnableSubHeading?: Types.Visibility.VisibilityConditions;
  headingHeadingText?: React.ReactNode;
  headingSubHeadingText?: React.ReactNode;
  contentParagraphVariant?: "Default" | "Default (White)" | "Default (Gray)";
  contentEnableParagraph?: Types.Visibility.VisibilityConditions;
  contentParagraphText?: React.ReactNode;
  buttonButtonVariant?:
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
  buttonButtonText?: React.ReactNode;
  buttonButtonLink?: Types.Basic.Link;
  buttonButtonAnalyticsId?: Types.Basic.IdTextInput;
  switchVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
