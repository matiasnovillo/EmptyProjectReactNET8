import { ChangeEvent } from "react";
import { InputTextProps } from "./types";

export const useProvider = (props: InputTextProps) => {
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
