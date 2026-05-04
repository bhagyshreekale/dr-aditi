"use client";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Appointment() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e3f2fd, #f8fbff)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container style={{ maxWidth: "900px" }}>
        <Card className="border-0 shadow-lg rounded-4">
          <Card.Body className="p-4 p-md-5">

            <div className="text-center mb-4">
              <h2 className="fw-bold text-primary">Book Appointment</h2>
              <p className="text-muted">
                Schedule your consultation with ease
              </p>
            </div>

            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Patient Name</Form.Label>
                    <Form.Control placeholder="Full Name" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control placeholder="Mobile Number" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select>
                      <option>Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Department</Form.Label>
                    <Form.Select>
                      <option>Dermatology</option>
                      <option>Orthopedics</option>
                      <option>Gynecology</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Time Slot</Form.Label>
                    <Form.Select>
                      <option>10 AM – 12 PM</option>
                      <option>4 PM – 6 PM</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4">
                <Form.Label>Symptoms / Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>

              <Button
                className="w-100 py-2 fw-semibold"
                style={{
                  background:
                    "linear-gradient(90deg, #0d6efd, #084298)",
                  border: "none",
                }}
              >
                Confirm Appointment
              </Button>
            </Form>

          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}