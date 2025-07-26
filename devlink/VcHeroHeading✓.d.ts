import * as React from "react";
import * as Types from "./types";

declare function VcHeroHeadingcheck_mark(props: {
  as?: React.ElementType;
  headingOptionsEnableSubHeading?: Types.Visibility.VisibilityConditions;
  headingContentHeadingText?: React.ReactNode;
  headingContentSubHeadingText?: React.ReactNode;
  variant?:
    | "Default"
    | "Default (White)"
    | "Default (Gray)"
    | "Default (Pewter)"
    | "Weddings (White)";
  headingOptionsHeadingLevel?: Types.Basic.HeadingTag;
  headingOptionsSubHeadingLevel?: Types.Basic.HeadingTag;
}): React.JSX.Element;
