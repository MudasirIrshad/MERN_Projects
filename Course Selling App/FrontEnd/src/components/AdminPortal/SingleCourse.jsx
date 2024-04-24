import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleCourse() {
  const { id } = useParams();

  return (
    <>
      <h1>Single Course Page {id}</h1>
    </>
  );
}
