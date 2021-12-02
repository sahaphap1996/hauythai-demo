import React from 'react'
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function submitApp() {
    return (
        <div className="submit-app">
            <Row>
                <Col>
                    <Button variant="danger" className="w-100">ใส่ราคา</Button>
                </Col>
                <Col>
                    <Button variant="secondary" className="w-100">ล้างค่า</Button>
                </Col>
            </Row>
        </div>
    )
}
