import { useState } from "react";
import { db } from "../../firebase/config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import styles from "./Bookform.module.scss";

export default function BookForm() {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [pressedTime, setPressedTime] = useState("");
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (
      bookName === "" &&
      authorName === "" &&
      pressedTime === "" &&
      categoryName === ""
    ) {
      alert("Lütfen Alanları doldurunuz");
      throw new Error("Lütfen Alanları doldurunuz");
    } else {
      setBookName("");
      setAuthorName("");
      setPressedTime("");
      setCategoryName("");
    }

    const ref = collection(db, "books");
    await addDoc(ref, {
      book: bookName,
      author: authorName,
      createdAt: serverTimestamp(),
      time: pressedTime,
      category: categoryName,
    });
  };

  return (
    <section className={styles.Wrapper}>
      <form>
        <div className={styles.loginWrapper}>
          <div className={styles["login-box"]}>
            <h2>Add Book</h2>
            <form>
              <div className={styles["user-box"]}>
                <input
                  onChange={(e) => setBookName(e.target.value)}
                  type="text"
                  name=""
                  value={bookName}
                />

                <label>Entry Book Name</label>
              </div>
              <div className={styles["user-box"]}>
                <input
                  onChange={(e) => setAuthorName(e.target.value)}
                  type="text"
                  name=""
                  value={authorName}
                />
                <label>Entry Author Name</label>
              </div>

              <div className={styles["user-box"]}>
                <input
                  onChange={(e) => setPressedTime(e.target.value)}
                  type="date"
                  name=""
                  value={pressedTime}
                />
                <label>Pressed Time</label>
              </div>

              <div className={styles["user-box"]}>
                <input
                  onChange={(e) => setCategoryName(e.target.value)}
                  type="text"
                  name=""
                  value={categoryName}
                />
                <label>Entry Category</label>
              </div>

              <div className={styles["button-form"]}>
                <a onClick={handleSubmit} className={styles.submit}>
                  Submit
                </a>
              </div>
            </form>
          </div>
        </div>
      </form>
    </section>
  );
}
