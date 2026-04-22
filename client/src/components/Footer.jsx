import { Box, Center, Text } from "@chakra-ui/react";

export default function Footer() {
return (
<Box bg="black" py={6}>
<Center>
<Text color="gray.500">© {new Date().getFullYear()} D’s CUTZ. All rights reserved.</Text>
</Center>
</Box>
);
}