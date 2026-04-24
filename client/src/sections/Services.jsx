import {
  Container,
  Heading,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  Image,
} from "@chakra-ui/react";

const service = [
  { title: "PRECISION FADES", desc: "Flawless Fades & Tapers", image: "/images/DsLogo.png" },
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

     
    </Container>
  );
}
