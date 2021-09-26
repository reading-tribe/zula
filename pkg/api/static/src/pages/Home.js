import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Home(props) {
    const [data, setData] = useState()
    useEffect(() => {
        fetch("/api/v1/users")
            .then(data => data.json())
            .then(jsonData => setData(jsonData))
    }, [])
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={10} className="justify-content-center">
                    <h1>Welcome to Zula</h1>
                    <h2>The Reading Tribe</h2>
                    {data ?
                        <pre>{JSON.stringify(data, null, 3)}</pre>
                        : <></>
                    }
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}