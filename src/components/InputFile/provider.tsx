import { ChangeEvent } from "react";
import { InputFileProps } from "./types";

export const useProvider = (props: InputFileProps) => {
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
