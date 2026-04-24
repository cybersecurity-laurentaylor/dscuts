import { Container, Heading, VStack, HStack, Text, Divider, Button } from "@chakra-ui/react";

const pricing = [
{ name: "Men’s Haircut", price: "$40" },
{ name: "Beard Trim", price: "$25" },
{ name: "Luxury Shave", price: "$35" },
{ name: "Kids Haircut", price: "$30" },
];

export default function Pricing() {
return (
<Container maxW="5xl" py={20}>
<Heading textAlign="center" color="gold.500" mb={10}>
Pricing
</Heading>

<VStack spacing={4} align="stretch">
{pricing.map((item) => (
<HStack key={item.name} justify="space-between" color="gray.200">
<Text>{item.name}</Text>
<Text color="gold.500">{item.price}</Text>
</HStack>
))}
</VStack>


</Container>
);
}
