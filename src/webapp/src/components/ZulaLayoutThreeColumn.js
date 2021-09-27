import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ZulaNav from "./ZulaNav";

export default function ZulaLayoutThreeColumn(props) {
    return (
        <>
            <ZulaNav />
            <Container className="pt-3">
                <Row>
                    <Col></Col>
                    <Col xs={10} className="justify-content-center">
                        {props.content}
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}