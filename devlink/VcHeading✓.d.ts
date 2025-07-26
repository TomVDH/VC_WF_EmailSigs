import * as React from "react";
import * as Types from "./types";

declare function VcHeadingcheck_mark(props: {
  as?: React.ElementType;
  variant?: "Default" | "Light (Normal)" | "Green (Weddings)";
  headingOptionsHeadingLevel?: Types.Basic.HeadingTag;
  headingOptionsEnableSubHeading?: Types.Visibility.VisibilityConditions;
  headingContentHeadingText?: React.ReactNode;
  headingContentSubHeadingText?: React.ReactNode;
}): React.JSX.Element;
