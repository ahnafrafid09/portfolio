import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Heading,
  Text,
  Section,
  Tailwind,
  Row,
  Column,
} from "@react-email/components";

interface EmailProps {
  fullname: string;
  email: string;
  service: string;
  message: string;
  phone: string;
}

export default function EmailTemplate({
  fullname,
  email,
  service,
  message,
  phone,
}: EmailProps) {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>Thank You For Your Message, {fullname}!</Preview>
        <Body className="bg-[#fff] mt-auto mx-auto  px-4 sm:px-6 text-[#fff] p-4">
          <Container className="border bg-[#1c1c22] border-[#00ff99] border-solid rounded my-10 mx-auto p-6 max-w-lg shadow-lg">
            {/* Logo / Branding */}
            <Section className="text-left">
              <Heading className="text-3xl font-bold text-[#fff]">
                Ahnaf<span className="text-[#00ff99]">.</span>
              </Heading>
            </Section>

            {/* Greeting */}
            <Section className="mt-4">
              <Heading className="text-2xl font-semibold text-[#fff]">
                Hello, {fullname}!
              </Heading>
              <Text className="text-lg mt-2 text-[#fff]">
                Thank you for reaching out! We have received your message and
                will get back to you soon.
              </Text>
            </Section>

            {/* Inquiry Details */}
            <Section className="mt-6 bg-[#2a2a32] text-[#fff] p-4 rounded-lg">
              <Text className="font-semibold text-lg text-[#fff]">
                Your Inquiry Details:
              </Text>
              <Row>
                <Column>
                  <Text className="text-[#fff]">
                    <strong>Email:</strong>{" "}
                    <a
                      href={`mailto:${email}`}
                      className="text-[#00ff99] underline"
                    >
                      {email}
                    </a>
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text className="text-[#fff]">
                    <strong>Phone:</strong>{" "}
                    <a
                      href={`tel:${phone}`}
                      className="text-[#00ff99] underline"
                    >
                      {phone}
                    </a>
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text className="text-[#fff]">
                    <strong>Service:</strong> {service}
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column>
                  <Text className="text-[#fff]">
                    <strong>Message:</strong> {message}
                  </Text>
                </Column>
              </Row>
            </Section>

            {/* Closing Remark */}
            <Section className="text-center mt-6">
              <Text className="text-lg text-[#fff]">
                Kindly wait for our reply.
              </Text>
            </Section>

            {/* Signature */}
            <Section className="text-left mt-4">
              <Text className="font-semibold text-lg text-[#fff]">
                Best Regards,
              </Text>
              <Text className="font-bold text-[#fff] text-xl">Ahnaf</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
