"use client";

import { useProvider } from "./provider";
import { InputGenericProps } from "./types";

export const InputGeneric = (props: InputGenericProps) => {
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
