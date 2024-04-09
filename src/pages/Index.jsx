import React from "react";
import { Button, Box, Heading, Text, Image, VStack, HStack, Flex, useColorModeValue, keyframes } from "@chakra-ui/react";
import { FaCode, FaGlobe, FaMobile } from "react-icons/fa";

const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Box bg={bgColor} minH="100vh" py={16}>
      <VStack spacing={8} alignItems="center" textAlign="center">
        <Heading as="h1" size="2xl" fontWeight="bold" color={textColor} animation={`${fadeIn} 1s ease-out`}>
          Welcome to Soft-Tech
        </Heading>
        <Text fontSize="xl" color={textColor} maxW="2xl" animation={`${fadeIn} 1s ease-out 0.2s`}>
          We provide cutting-edge software solutions to organizations worldwide
        </Text>
        <Image src="https://images.unsplash.com/photo-1492366254240-43affaefc3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwwfHx8fDE3MTI2MTAyODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Software Development Team" w="full" maxW="4xl" animation={`${fadeIn} 1s ease-out 0.4s`} />
        <Flex justify="center" wrap="wrap" animation={`${fadeIn} 1s ease-out 0.6s`}>
          <Box p={4} m={4} maxW="sm" borderWidth={1} borderRadius="lg" boxShadow="md" bg="white">
            <FaCode size={48} color="blue.500" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              ERP Systems
            </Heading>
            <Text>Streamline your business processes with our customizable ERP solutions</Text>
          </Box>
          <Box p={4} m={4} maxW="sm" borderWidth={1} borderRadius="lg" boxShadow="md" bg="white">
            <FaGlobe size={48} color="green.500" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Web Development
            </Heading>
            <Text>Engage your audience with modern and responsive websites and web applications</Text>
          </Box>
          <Box p={4} m={4} maxW="sm" borderWidth={1} borderRadius="lg" boxShadow="md" bg="white">
            <FaMobile size={48} color="purple.500" />
            <Heading as="h3" size="lg" mt={4} mb={2}>
              Mobile Apps
            </Heading>
            <Text>Reach your customers on the go with our feature-rich mobile applications</Text>
          </Box>
        </Flex>
        <Button size="lg" colorScheme="blue" animation={`${fadeIn} 1s ease-out 0.8s`}>
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
