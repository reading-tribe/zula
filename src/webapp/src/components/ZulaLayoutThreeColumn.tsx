import {
    Row,
    Col
 } from "react-bootstrap"
import ZulaNav from "./ZulaNav";

interface ZulaLayoutThreeColumnProps {
    content: any
}

export default function ZulaLayoutThreeColumn(props: ZulaLayoutThreeColumnProps) {
    return (
        <>
            <ZulaNav/>
            <div className="pt-3">
                <Row className="justify-content-md-center">
                    <Col></Col>
                    <Col xs={9} className="justify-content-md-center">
                        {props.content}
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        </>
    )
}