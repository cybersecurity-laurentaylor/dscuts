import { Container, SimpleGrid, VStack, Heading, Text } from "@chakra-ui/react";

export default function Contact() {
return (
<Container maxW="6xl" py={20}>
<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>

<VStack align="start">
<Heading size="md" color="gold.500">Visit Us</Heading>
<Text color="gray.300">123 Main St.</Text>
<Text color="gray.300">City, State 12345</Text>
</VStack>

<VStack align="start">
<Heading size="md" color="gold.500">Call</Heading>
<Text color="gray.300">(123) 456-7890</Text>
</VStack>

<VStack align="start">
<Heading size="md" color="gold.500">Open Hours</Heading>
<Text color="gray.300">Mon–Fri: 9 AM – 7 PM</Text>
<Text color="gray.300">Sat: 9 AM – 5 PM</Text>
<Text color="gray.300">Sun: Closed</Text>
</VStack>

</SimpleGrid>
</Container>
);
}