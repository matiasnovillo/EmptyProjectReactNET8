"use client";

import { useProvider } from "./provider";
import { InputFileProps } from "./types";

export const InputFile = (props: InputFileProps) => {
  const { label, value, name, type, id, handleChange } = useProvider(props);

  return (
    <>
      <label>{label}</label>
      <input
        value={value}
        name={name}
        type={type}
        id={id}
        onChange={handleChange}
      ></input>
    </>
  );
};
