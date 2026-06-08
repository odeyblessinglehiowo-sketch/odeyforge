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
}

export default function ProjectConfirmationEmail({
  name,
}: Props) {
  return (
    <Html>
      <Head />

      <Body>
        <Container>
          <Heading>
            We've Received Your Inquiry
          </Heading>

          <Text>
            Hello {name},
          </Text>

          <Text>
            Thank you for reaching out to OdeyForge.
          </Text>

          <Text>
            We've successfully received your project
            inquiry and will review it shortly.
          </Text>

          <Text>
            You can expect a response within
            24 hours.
          </Text>

          <Text>
            We appreciate your interest in
            working with us.
          </Text>

          <Text>
            Blessing Odey
            <br />
            Founder, OdeyForge
          </Text>
        </Container>
      </Body>
    </Html>
  );
}