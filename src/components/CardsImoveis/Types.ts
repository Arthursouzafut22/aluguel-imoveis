import { PropertProps } from "../../services/Types";

export type CardProps = {
  item: PropertProps;
  flexdirection: "row" | "column";
  config?: {
    height?: string;
    flex?: number;
    top?: string;
    imgWidth?: string;
  };
};
