import React from "react";
import style from "./Homehero.module.scss";

import { motion } from "framer-motion";

export default function Homhero() {
  const animationWithDelay = (delay: number) => {
    return {
      animate: {
        y: [100, 0],
      },
      transition: {
        ease: "easeInOut",
        delay: delay,
      },
    };
  };
  return (
    <div>
      {" "}
      <div className={style["homehero-wrapper-main"]}></div>
    </div>
  );
}
