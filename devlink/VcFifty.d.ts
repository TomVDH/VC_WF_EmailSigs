import * as React from "react";
import * as Types from "./types";

declare function VcFifty(props: {
  as?: React.ElementType;
  headingVisibility?: Types.Visibility.VisibilityConditions;
  headingText?: React.ReactNode;
  paragraphVisibility?: Types.Visibility.VisibilityConditions;
  paragraphText?: React.ReactNode;
  richTextVisibility?: Types.Visibility.VisibilityConditions;
  richText?: Types.Basic.RichTextChildren;
  buttonVisibility?: Types.Visibility.VisibilityConditions;
  buttonText?: React.ReactNode;
  buttonLink?: Types.Basic.Link;
  image?: Types.Asset.Image;
  backgroundColourReferToTheWebflowVariablesForSelectableColoursTypeTheirVariableNameBelow?: Types.Builtin.Text;
  imageSideTypeLeftForLeftAlignedNoneToHideDefaultsToRightAligned?: Types.Builtin.Text;
  copyHeightPriorityIfSetToTrueTheCopyDeterminesTheMaxHeightOfTheBlockInsteadOfTheImageHeight?: Types.Builtin.Text;
  imageVerticalAlignmentSetTheVerticalAlignmentOfTheImageCopyHeightPriorityMustBeEnabledForThisToWork?: Types.Builtin.Text;
  imageMaxHeightOnMobileInPx?: Types.Builtin.Text;
}): React.JSX.Element;
