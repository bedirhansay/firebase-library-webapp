import Image from "next/image";
import React from "react";
import styles from "./ForthDiv.module.scss";
import Head from "next/head";

const ForthDiv = () => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
          integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <section className={styles.review}>
        <h1 className={styles.heading}>
          Customer <span>Review</span>
        </h1>
        <div className={styles["box-container"]}>
          <div className={styles.box}>
            <Image alt="" src="/assets/Quote.png" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, eligendi assumenda quod minus aperiam voluptatum
            </p>
            <Image alt="" src="/assets/komedyen.png" width={200} height={300} />
            <h3>Jeniffer Becker</h3>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className={styles.box}>
            <Image alt="" src="/assets/Quote.png" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, eligendi assumenda quod minus aperiam
            </p>
            <Image alt="" src="/assets/ko.png" width={200} height={300} />
            <h3>John Doe</h3>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className={styles.box}>
            <Image alt="" src="/assets/Quote.png" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, eligendi assumenda quod minus aperiam
            </p>
            <Image alt="" src="/assets/sha.png" width={200} height={300} />
            <h3>Lisa Arambula</h3>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
          <div className={styles.box}>
            <Image alt="" src="/assets/Quote.png" width={100} height={100} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, eligendi assumenda quod minus aperiam
            </p>
            <Image alt="" src="/assets/sk.png" width={200} height={300} />
            <h3>Lisa Arambula</h3>
            <div className={styles.stars}>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForthDiv;
