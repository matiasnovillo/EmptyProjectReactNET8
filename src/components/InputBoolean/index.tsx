"use client";

import { useProvider } from "./provider";
import { InputBooleanProps } from "./types";

export const InputBoolean = (props: InputBooleanProps) => {
  const { label, value, name, type, id, handleChange } = useProvider(props);

  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        id={id}
        onChange={handleChange}
      />
    </>
  );
};
