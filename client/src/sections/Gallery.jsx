import { Container, Heading, SimpleGrid, Image } from "@chakra-ui/react";

export default function Gallery() {
return (
<Container maxW="7xl" py={20}>
<Heading textAlign="center" color="gold.500" mb={10}>
Gallery
</Heading>

<SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
<Image src="https://tse3.mm.bing.net/th/id/OIP.dF_HN-4S6X1L_nyAb9S6NwHaHa?pid=Api&h=220&P=0" borderRadius="lg" />
<Image src="https://tse2.mm.bing.net/th/id/OIP.p6MB8I23LdHLRz4LdEHiCAHaHa?pid=Api&h=220&P=0" borderRadius="lg" />
<Image src="https://tse3.mm.bing.net/th/id/OIP.x4kLtCWrUGSmcmlE0mx6RgHaHa?pid=Api&h=220&P=0" borderRadius="lg" />
</SimpleGrid>
</Container>
);
}