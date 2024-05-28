import { InputState } from "@/components/types";

export type InputFileProps = {
  label: string;
  value?: string;
  name: string;
  type: string;
  id: string;
  onChange?: (state: InputState) => void;
};
