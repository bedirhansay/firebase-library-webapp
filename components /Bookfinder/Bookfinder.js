import React, { useState } from "react";
import styles from "./Bookfinder.module.scss";

export default function Bookfinder({ documents }) {
  const handler = (inputValue) => {
    const filtered = documents.filter((item) => item.book == inputValue);
    return filtered;
  };

  const [inputValue, setInputName] = useState();

  return (
    <div className={styles.finderWrapper}>
      <div>
        <input onChange={(e) => setInputName(e.target.value)} />
        <button onClick={handler}>Ara</button>
      </div>
      {documents?.map((item) => (
        <li key={item.id}>{item.book}</li>
      ))}
    </div>
  );
}
