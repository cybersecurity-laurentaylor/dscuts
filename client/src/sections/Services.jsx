import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/react";

const service = [
  { title: "PRECISION FADES", desc: "Flawless Fades & Tapers", image: "/images/DsLogo.png"},
  { title: "BEARD SCULPTING", desc: "Sharp Beard Grooming", image: "/images/DsLogo.png" },
  { title: "LUXURY SHAVE", desc: "Hot Towel & Razor Shave", image: "/images/DsLogo.png" },
  { title: "GROOMING FOR GENTS", desc: "Styles for the Modern Gent", image: "/images/DsLogo.png" },
];

export default function Services() {
  return (
    <Container maxW="7xl" py={20}>
      <Heading textAlign="center" color="gold.500" mb={10}>
        Our Services
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {service.map((s) => (
          <Card key={s.title} position="relative"
        
  bg="black"
  border="2px solid #D4AF37"
  borderRadius="xl"
  boxShadow="0 0 20px rgba(212, 175, 55, 0.4)"
  _hover={{
    boxShadow: "0 0 30px rgba(212, 175, 55, 0.7)",
    transform: "translateY(-4px)",
    transition: "all 0.3s ease",

  }}
 >
          <Image 
    src={s.image} 
    alt={s.title} 
    h="180px" 
    w="100%" 
    objectFit="cover"
  />

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
