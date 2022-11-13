import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import Homepage from "./homepage";
import { useCollection } from "../hooks/useCollection";
import Booklist from "../components /Booklist/Booklist";
export default function Showbook() {
  const { documents: books } = useCollection("books");

  // const [books, setBooks] = useState();

  // useEffect(() => {
  //   const ref = collection(db, "books");

  //   getDocs(ref).then((snap) => {
  //     let result = [];
  //     snap.forEach((doc) => {
  //       result.push({ id: doc.id, ...doc.data() });
  //     });
  //     setBooks(result);
  //   });
  // }, []);
  // const handleClick = async (id) => {
  //   console.log(id);
  // };

  return <div className="book-list">{books && <Booklist books={books} />}</div>;
}
