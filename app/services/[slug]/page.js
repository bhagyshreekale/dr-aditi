import servicesData from "../../data/servicesData";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
// Import React Bootstrap components
import { Container, Row, Col, Badge } from 'react-bootstrap';

function createSlug(text) {
  return text.toLowerCase().trim().replace(/\s+/g, "-").replace(/[()]/g, "");
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: createSlug(service.title),
  }));
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = servicesData.find((s) => createSlug(s.title) === slug);

  if (!service) notFound();

  return (
    <Container className="py-5">
      {/* Navigation */}
      <Row className="mb-4">
        <Col>
          <Link href="/services" className="text-decoration-none">
            ← Back to All Services
          </Link>
        </Col>
      </Row>

      {/* Title */}
      <Row className="mb-4">
        <Col>
          <h1 className="display-4 fw-bold">{service.title}</h1>
        </Col>
      </Row>

      <Row className="gy-4">
        {/* Left Column: Image and Quick Info */}
        <Col lg={5} md={6} xs={12}>
          <div className="position-relative mb-4">
            <Image
              src={service.image}
              width={500}
              height={400}
              alt={service.title}
              className="img-fluid rounded-4 shadow-sm"
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
              priority
            />
          </div>
          
          <div className="p-4 bg-light rounded-4 border">
            <h5 className="mb-3 fw-bold">Quick Information</h5>
            <p className="mb-2"><strong>⏱ Duration:</strong> {service.duration}</p>
            <p className="mb-2"><strong>📅 Sessions:</strong> {service.sessions}</p>
            <div className="mt-3">
               <strong>🎯 Ideal For:</strong>
               <div className="d-flex flex-wrap gap-2 mt-2">
                 {service.idealFor?.map((tag, index) => (
                   <Badge key={index} bg="secondary" pill className="fw-normal">
                     {tag}
                   </Badge>
                 ))}
               </div>
            </div>
          </div>
        </Col>

        {/* Right Column: Detailed Content */}
        <Col lg={7} md={6} xs={12}>
          <section className="mb-4">
            <h3 className="h4 fw-bold">Description</h3>
            <p className="text-muted leading-relaxed">{service.description}</p>
          </section>

          <section className="mb-4">
            <h3 className="h4 fw-bold">Key Benefits</h3>
            <ul className="ps-3">
              {service.benefits.map((b, i) => (
                <li key={i} className="mb-1">{b}</li>
              ))}
            </ul>
          </section>

          {service.aftercare && (
            <section className="mb-4">
              <h3 className="h4 fw-bold">After Care</h3>
              <ul className="ps-3 text-secondary">
                {service.aftercare.map((a, i) => (
                  <li key={i} className="mb-1">{a}</li>
                ))}
              </ul>
            </section>
          )}

          {service.disadvantages && (
            <section className="p-3 bg-danger-subtle rounded-3 border-start border-danger border-4">
              <h3 className="h5 fw-bold text-danger">What to Expect (Side Effects)</h3>
              <ul className="mb-0 text-danger-emphasis">
                {service.disadvantages.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </section>
          )}
        </Col>
      </Row>
    </Container>
  );
}