import { ChangeEvent } from "react";
import { InputGenericProps } from "./types";

export const useProvider = (props: InputGenericProps) => {
  const { label, value, name, type, id, onChange } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    onChange?.({ name, value });
  };

  return {
    label,
    value,
    name,
    type,
    id,
    handleChange,
  };
};
