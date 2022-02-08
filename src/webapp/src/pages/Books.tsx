import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import ZulaBookTranslationCard from "../components/ZulaBookTranslationCard";
import ZulaLayoutThreeColumn from "../components/ZulaLayoutThreeColumn";
import { BooksList } from "../models";

export default function Books() {
  const [data, setData] = useState<BooksList>();
  const { REACT_APP_API_URL } = process.env;
  useEffect(() => {
    if (REACT_APP_API_URL) {
      fetch(REACT_APP_API_URL + "/books")
        .then((data) => data.json())
        .then((jsonData) => setData(jsonData))
        .catch((error) => console.error(error));
    }
  }, []);
  return (
    <ZulaLayoutThreeColumn
      content={
        <>
          {data ? (
            data.items.map((book) => {
              return book.translations.map((bookTranslation) => (
                <ZulaBookTranslationCard
                  bookId={book.id}
                  bookTranslation={bookTranslation}
                />
              ));
            })
          ) : (
            <></>
          )}
        </>
      }
    />
  );
}
