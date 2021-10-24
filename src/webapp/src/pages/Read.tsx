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
    
    useEffect(() => {
        fetch(`http://localhost:1323/api/v1/books/${id}`)
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
                                        width="50vw"
                                        className="d-block w-100"
                                        src={bookImageLink.uri}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
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