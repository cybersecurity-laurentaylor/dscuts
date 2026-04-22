// components/Layout.jsx
import { Box } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Box
      bgImage="url('/images/luxury-bg.jpg')" // your black textured background
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="100vh"
      color="white"
    >
      {children}
    </Box>
  );
}