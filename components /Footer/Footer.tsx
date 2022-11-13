import React from "react";
import Link from "next/link";
import style from "./Footer.module.scss";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className={style["footer-wrapper"]}>
        <pre>
          “If you're not making someone else's life better, then you're wasting
          your time.
        </pre>

        <div className={style["footer-divier"]} />
        <p></p>
        <div className={style["footer-row"]}>
          <p className={style["footer-copyright"]}>
            © {new Date().getFullYear()}, ReminderBooks
          </p>
          <div>Powered By Bedirhan SAY</div>
          <div className={style["footer-social-media"]}>
            <p>Follow </p>
            <div className={style["footer-social-media-icon"]}>
              <BsFacebook />
            </div>
            <div className={style["footer-social-media-icon"]}>
              <BsYoutube />
            </div>
            <div className={style["footer-social-media-icon"]}>
              <BsInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
