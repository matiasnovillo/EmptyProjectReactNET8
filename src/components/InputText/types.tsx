import { InputTextState } from "@/components/types";

export type InputTextProps = {
  label: string;
  value?: string;
  name: string;
  type: string;
  onChange?: (state: InputTextState) => void;
};
