import { useProvider } from "./provider";
import { InputTextURLProps } from "./types";

export const InputTextURL = (props: InputTextURLProps) => {
  const { label, value, name, type, handleChange } = useProvider(props);

  return (
    <>
      <label>{label}</label>
      <input type={type} value={value} name={name} onChange={handleChange} />
    </>
  );
};
