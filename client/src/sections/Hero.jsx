import { Box, SimpleGrid, VStack, Heading, Text, Button, Image, Container } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box
      bgImage="url('/images/hero-bg.jpg')"   // ✔ correct path
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      py={20}
      px={8}
      position="relative"
    >
      {/* Optional overlay */}
      <Box
        position="absolute"
        inset="0"
        bg="blackAlpha.600"   // ✔ safe overlay that won't hide content
        zIndex="0"
      />

<Container>
        <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={10}
        alignItems="center"
        position="relative"
        zIndex="1"            // ✔ ensures content sits above overlay
      >
        <VStack align="start" spacing={6} color="white">
          <Heading color="gold.500" fontSize="4xl">
            Elevate your style at D’s CUTZ
          </Heading>
          <Text color="gray.300" fontSize="lg">
            Premier grooming for the modern gentleman.
          </Text>
          <Button size="lg" bg="gold.500" color="black" _hover={{ bg: "gold.400" }}>
            BOOK NOW
          </Button>
        </VStack>

        <Image
          src="/images/DsLogo.png"   // ✔ corrected path
          alt="Barber Chair"
          borderRadius="xl"
          shadow="2xl"
        />
      </SimpleGrid>
</Container>
    </Box>
  );
}
