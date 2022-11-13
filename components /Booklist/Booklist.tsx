import styles from "./Booklist.module.scss";
import { db } from "../../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export default function Booklist({ books }: any) {
  const handleClick = async (id: any) => {
    const ref = doc(db, "books", id);
    await deleteDoc(ref);
  };

  return (
    <div className={styles.bookWrapperMain}>
      {books?.map((item: any, index: number) => (
        <div key={index} className={styles.booksWrapper}>
          <p className={styles.bookName}>{item.book}</p>
          <p className={styles.bookImage}>Image Folder</p>
          <p className={styles.bookAuthor}>{item.author}</p>
          <p className={styles.bookCategory}>{item.book}</p>
          <p className={styles.bookPressed}>{item.time}</p>
          <button
            onClick={() => handleClick(item.id)}
            className={styles.button}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
