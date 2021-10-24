import {
    Button,
    Card
} from "react-bootstrap"
import LinkContainer from "react-router-bootstrap/lib/LinkContainer"
import { BookTranslation } from "../models"

interface ZulaBookTranslationCardProps {
    bookId: string
    bookTranslation: BookTranslation
}

export default function ZulaBookTranslationCard(props: ZulaBookTranslationCardProps) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqNLdCR0Zd0hDxETHEO1Ot442TQ0exOlPPOQ&usqp=CAU" />
            <Card.Body>
            <Card.Title>{props.bookTranslation.title}</Card.Title>
            <Card.Text>
                {props.bookTranslation.locale}
            </Card.Text>
            <LinkContainer to={`/read?id=${props.bookId}&locale=${props.bookTranslation.locale}`}><Button className="mx-1" variant="link">Read</Button></LinkContainer>
            <Button className="mx-1" variant="primary">Buy</Button>
            </Card.Body>
        </Card>
    )
}