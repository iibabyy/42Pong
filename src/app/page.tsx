"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { 
  Box, 
  Container, 
  Flex, 
  Text 
} from "@radix-ui/themes";

export default function HomePage() {
  const router = useRouter();

  // Page de chargement pendant la vérification de l'authentification
  return (
    <Box className="min-h-screen">
      <Container size="3" py="9">
        <Flex align="center" justify="center" className="min-h-[70vh]">
          <Text size="3">Loading...</Text>
        </Flex>
      </Container>
    </Box>
  );
}
