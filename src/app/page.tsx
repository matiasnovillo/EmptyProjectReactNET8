"use client";
import { InputText } from "@/components";
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
      <InputText
        label="InputTextBasic"
        value=""
        name="inputtextbasic"
        type="text"
        onChange={handleChange}
      />
      <InputText
        label="InputTextURL"
        value=""
        name="inputtexturl"
        type="url"
        onChange={handleChange}
      />
    </main>
  );
}
