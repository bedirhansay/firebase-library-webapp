import React from "react";
import Bookfinder from "../components /Bookfinder/Bookfinder";
import { useCollection } from "../hooks/useCollection";

export default function bookfinder() {
  const { documents } = useCollection("books");
  return (
    <div>
      <Bookfinder documents={documents} />
    </div>
  );
}
