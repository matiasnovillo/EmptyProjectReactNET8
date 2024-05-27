import { ChangeEvent } from "react";
import { InputTextURLProps } from "../InputTextURL/types";

export const useProvider = (props: InputTextURLProps) => {
  const { label, value, name, type, onChange } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    onChange?.({ name, value });
  };

  return {
    label,
    value,
    name,
    type,
    handleChange,
  };
};
