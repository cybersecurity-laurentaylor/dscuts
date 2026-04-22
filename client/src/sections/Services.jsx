import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/card";

const service = [
  { title: "PRECISION FADES", desc: "Flawless Fades & Tapers" },
  { title: "BEARD SCULPTING", desc: "Sharp Beard Grooming" },
  { title: "LUXURY SHAVE", desc: "Hot Towel & Razor Shave" },
  { title: "GROOMING FOR GENTS", desc: "Styles for the Modern Gent" },
];

export default function Services() {
  return (
    <Container maxW="7xl" py={20}>
      <Heading textAlign="center" color="gold.500" mb={10}>
        Our Services
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {service.map((s) => (
          <Card key={s.title} bg="black" border="1px solid" borderColor="gold.500">
            <CardHeader color="gold.500" fontWeight="bold">
              {s.title}
            </CardHeader>
            <CardBody color="gray.300">{s.desc}</CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}
