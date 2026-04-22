import { Flex, HStack, Button, Text } from "@chakra-ui/react";

export default function Navbar() {
return (
<Flex
as="nav"
bg="black"
color="gold.500"
px={8}
py={4}
  bgImage="url('/images/luxury-bg.jpg')"
  bgSize="cover"
  bgPosition="center"
  bgRepeat="no-repeat"

align="center"
justify="space-between"
boxShadow="lg"
>
<Text fontSize="2xl" fontWeight="bold">
D’s CUTZ
</Text>

<HStack spacing={8} display={{ base: "none", md: "flex" }}>
<Text cursor="pointer">Home</Text>
<Text cursor="pointer">Services</Text>
<Text cursor="pointer">Gallery</Text>
<Text cursor="pointer">Contact</Text>
</HStack>

<Button colorScheme="gold" variant="outline" borderColor="gold.500">
Book Appointment
</Button>
</Flex>
);
}