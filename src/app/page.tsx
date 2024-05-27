"use client";
import { InputTextBasic, InputTextURL } from "@/components";
import styles from "./page.module.css";
import { useState } from "react";
import { InputState } from "@/components/types";

export default function Home() {
  const [request, setRequest] = useState<{
    user?: string;
    pass?: string;
  }>({});

  const handleChange = (state: InputState) => {
    const { name, value } = state;

    setRequest({
      ...request,
      [name]: value,
    });
  };

  return (
    <main className={styles.main}>
      <InputTextBasic
        label="InputTextBasic"
        value=""
        name="inputtextbasic"
        type="text"
        onChange={handleChange}
      />
      <InputTextURL
        label="InputTextURL"
        value=""
        name="inputtexturl"
        type="url"
        onChange={handleChange}
      />
    </main>
  );
}
