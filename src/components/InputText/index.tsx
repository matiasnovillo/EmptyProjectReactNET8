"use client";

import { useProvider } from "./provider";
import { InputTextProps } from "./types";

export const InputText = (props: InputTextProps) => {
  const { label, value, name, type, handleChange } = useProvider(props);

  return (
    <>
      <label>{label}</label>
      <input type={type} value={value} name={name} onChange={handleChange} />
    </>
  );
};
