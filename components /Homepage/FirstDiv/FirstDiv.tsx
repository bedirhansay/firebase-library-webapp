import Image from "next/image";
import React from "react";
import styles from "./FirstDiv.module.scss";

const FirstDiv = () => {
  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.sections}>
        <div className={styles.title}>
          <p>
            Latest <span>Book</span>{" "}
          </p>
        </div>
        <div className={styles.gallery}>
          <div className={styles.galleryimg}>
            <Image
              alt=""
              src="/assets/askmasali.png"
              width={200}
              height={300}
            />
          </div>

          <div className={styles.galleryimg}>
            <Image alt="" src="/assets/komedyen.png" width={200} height={300} />
          </div>
          <div className={styles.galleryimg}>
            <Image alt="" src="/assets/sha.png" width={200} height={300} />
          </div>

          <div className={styles.galleryimg}>
            <Image alt="" src="/assets/sk.png" width={200} height={300} />
          </div>

          <div className={styles.galleryimg}>
            <Image alt="" src="/assets/ko.png" width={200} height={300} />
          </div>
          <div className={styles.galleryimg}>
            <Image alt="" src="/assets/iio.png" width={200} height={300} />
          </div>
          <div className={styles.galleryimg}>
            <Image alt="" src="/assets/iyi.png" width={200} height={300} />
          </div>
          <div className={styles.galleryimg}>
            <Image alt="" src="/assets/kbv.png" width={200} height={300} />
          </div>
          <div className={styles.galleryimg}>
            <Image alt="" src="/assets/sk.png" width={200} height={300} />
          </div>
          <div className={styles.galleryimg}>
            <Image alt="" src="/assets/ko.png" width={200} height={300} />
          </div>
          <div className={styles.galleryimg}>
            <Image alt="" src="/assets/sha.png" width={200} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstDiv;
