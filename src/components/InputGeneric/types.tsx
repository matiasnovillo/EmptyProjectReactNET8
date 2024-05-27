import { InputState } from "@/components/types";

export type InputGenericProps = {
  label: string;
  value?: string;
  name: string;
  type: string;
  id: string;
  onChange?: (state: InputState) => void;
};
