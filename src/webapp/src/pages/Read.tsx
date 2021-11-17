import { listeners } from "cluster";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ZulaLayoutThreeColumn from "../components/ZulaLayoutThreeColumn";
import { Book, BookTranslation } from "../models";


export default function Read() {
    const [data, setData] = useState<BookTranslation>()
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number, e: any) => {
        setIndex(selectedIndex);
    };

    const query = new URLSearchParams(useLocation().search)
    const id = query.get("id")
    const locale = query.get("locale")

    const { REACT_APP_API_URL } = process.env;
    
    useEffect(() => {
        if (REACT_APP_API_URL) {
            fetch(REACT_APP_API_URL+`/books/${id}`)
                .then(data => data.json())
                .then(jsonData => {
                    const book = jsonData as Book
                    for (const bookTranslation of book.translations) {
                        if (bookTranslation.locale === locale){
                            setData(bookTranslation)
                            break
                        }
                    }
                })
                .catch(error => console.error(error))
        }
    }, [id, locale])
    
    return (
        <ZulaLayoutThreeColumn content={
            <>
                {
                    data ? 
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        {data.content.map((bookImageLink) => {
                            return (
                                <Carousel.Item>
                                    <img
                                        width="100%"
                                        src={bookImageLink.uri}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                    : <></>
                }
            </>
        } />
    )
}