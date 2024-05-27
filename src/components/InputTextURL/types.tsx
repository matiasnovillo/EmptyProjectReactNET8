import { InputState } from "../types";

export type InputTextURLProps = {
  label: string;
  name: string;
  value: string;
  type: string;
  onChange: (state: InputState) => void;
};
