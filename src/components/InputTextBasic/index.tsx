"use client";

import { useProvider } from "./provider";
import { InputTextBasicProps } from "./types";

export const InputTextBasic = (props: InputTextBasicProps) => {
  const { label, value, name, type, handleChange } = useProvider(props);

  return (
    <>
      <label>{label}</label>
      <input type={type} value={value} name={name} onChange={handleChange} />
    </>
  );
};
