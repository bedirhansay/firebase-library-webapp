import Image from "next/image";
import React from "react";
import styles from "./SecondDiv.module.scss";
Image;

export default function SecondDiv() {
  const books = [
    { price: "49$", image: "/assets/ko.png", tag: "Most Popular" },
    { price: "49$", image: "/assets/sk.png" },
    { price: "49$", image: "/assets/sha.png" },
    { price: "49$", image: "/assets/komedyen.png" },
    { price: "49$", image: "/assets/iyi.png" },
    { price: "49$", image: "/assets/iio.png" },
  ];

  return (
    <section>
      <div className={styles.sliderWrapper}>
        <div className={styles.nav}>Most Popular Book</div>
        <div className={styles.booksWrapper}>
          <div className={styles.titleWrapper}>title</div>
          <div className={styles.imageWrapper}>
            <Image alt="" src="/assets/sk.png" width={200} height={200}></Image>
          </div>
          <div className={styles.buttonWrapper}>
            <button>Sepete Ekle</button>
            <span>fiyat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
