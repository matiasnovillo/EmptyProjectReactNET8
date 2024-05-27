export type InputTextBasicState = {
  name: string;
  value: string;
};

export type InputTextBasicProps = {
  label: string;
  value?: string;
  name: string;
  type: string;
  onChange?: (state: InputTextBasicState) => void;
};
