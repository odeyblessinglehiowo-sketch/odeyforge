import {
  Body,
  Container,
  Head,
  Html,
  Heading,
  Text,
} from "@react-email/components";

interface Props {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  timeline?: string;
  description: string;
}

export default function ProjectInquiryEmail({
  name,
  email,
  phone,
  company,
  projectType,
  budget,
  timeline,
  description,
}: Props) {
  return (
    <Html>
      <Head />

      <Body>
        <Container>
          <Heading>
            New Project Inquiry
          </Heading>

          <Text><strong>Name:</strong> {name}</Text>

          <Text><strong>Email:</strong> {email}</Text>

          <Text><strong>Phone:</strong> {phone}</Text>

          <Text><strong>Company:</strong> {company}</Text>

          <Text><strong>Project Type:</strong> {projectType}</Text>

          <Text><strong>Budget:</strong> {budget}</Text>

          <Text><strong>Timeline:</strong> {timeline}</Text>

          <Text><strong>Description:</strong></Text>

          <Text>{description}</Text>
        </Container>
      </Body>
    </Html>
  );
}