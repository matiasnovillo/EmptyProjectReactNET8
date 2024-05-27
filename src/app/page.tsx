"use client";
import { InputBoolean, InputGeneric } from "@/components";
import styles from "./page.module.css";
import { useState } from "react";
import { InputState } from "@/components/types";

export default function Home() {
  const [request, setRequest] = useState<{
    user?: string;
    pass?: string;
  }>({});

  const handleChange: any = (state: InputState) => {
    const { name, value } = state;

    setRequest({
      ...request,
      [name]: value,
    });
  };

  return (
    <main className={styles.main}>
      <InputBoolean
        label="InputBoolean"
        value=""
        name="inputboolean"
        id="inputboolean"
        type="checkbox"
        onChange={handleChange}
      />
      <InputGeneric
        label="InputDateTime"
        value=""
        name="inputdatetime"
        id="inputdatetime"
        type="datetime"
        onChange={handleChange}
      />
      <InputGeneric
        label="InputTextBasic"
        value=""
        name="inputtextbasic"
        id="inputtextbasic"
        type="text"
        onChange={handleChange}
      />
      <InputGeneric
        label="InputTextBasic"
        value=""
        name="inputtextbasic"
        id="inputtextbasic"
        type="text"
        onChange={handleChange}
      />
      <InputGeneric
        label="InputTextURL"
        value=""
        name="inputtexturl"
        id="inputtexturl"
        type="url"
        onChange={handleChange}
      />
      <InputGeneric
        label="InputTextFile"
        value=""
        name="inputtextfile"
        id="inputtextfile"
        type="file"
        onChange={handleChange}
      />
    </main>
  );
}
