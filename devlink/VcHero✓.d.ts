import * as React from "react";
import * as Types from "./types";

declare function VcHerocheck_mark(props: {
  as?: React.ElementType;
  variant?:
    | "Base (Blank) [Don't Use]"
    | "Homepage"
    | "Membership"
    | "Food & Beverage"
    | "Weddings"
    | "Events"
    | "Travel"
    | "Health & Wellness"
    | "Accommodations";
  centerHeroEnableCenterHero?: Types.Visibility.VisibilityConditions;
  sideHeroEnableSideHero?: Types.Visibility.VisibilityConditions;
  sideHeroHeadingVariant?:
    | "Default"
    | "Default (White)"
    | "Default (Gray)"
    | "Default (Pewter)"
    | "Weddings (White)";
  sideHeroEnableSubHeading?: Types.Visibility.VisibilityConditions;
  sideHeroHeadingText?: React.ReactNode;
  sideHeroSubHeadingText?: React.ReactNode;
  sideHeroParagraphText?: React.ReactNode;
  sideHeroEnableButton?: Types.Visibility.VisibilityConditions;
  sideHeroButtonAnalyticsId?: Types.Basic.IdTextInput;
  sideHeroButtonText?: React.ReactNode;
  sideHeroButtonLink?: Types.Basic.Link;
  centerHeroEnableButton?: Types.Visibility.VisibilityConditions;
  centerHeroButtonAnalyticsId?: Types.Basic.IdTextInput;
  centerHeroButtonText?: React.ReactNode;
  centerHeroButtonLink?: Types.Basic.Link;
  imageOverrideOverrideImgBackground?: Types.Visibility.VisibilityConditions;
  imageOverrideBackgroundImage?: Types.Asset.Image;
  centerHeroImageVisibility?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
