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
      <VStack spacing={12} alignItems="center" textAlign="center">
        <Heading as="h1" size="3xl" fontWeight="extrabold" color={textColor} animation={`${fadeIn} 1s ease-out`}>
          Soft-Tech: Empowering Businesses with Innovative Software Solutions
        </Heading>
        <Text fontSize="2xl" color={textColor} maxW="3xl" animation={`${fadeIn} 1s ease-out 0.2s`}>
          From ERP systems to web and mobile applications, we deliver cutting-edge software that drives growth and efficiency for organizations worldwide.
        </Text>
        <Image src="https://images.unsplash.com/photo-1492366254240-43affaefc3e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwwfHx8fDE3MTI2MTAyODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Software Development Team" w="full" maxW="5xl" borderRadius="lg" boxShadow="xl" animation={`${fadeIn} 1s ease-out 0.4s`} />
        <Flex justify="center" wrap="wrap" animation={`${fadeIn} 1s ease-out 0.6s`}>
          <Box p={6} m={4} maxW="md" borderWidth={2} borderRadius="xl" boxShadow="lg" bg="white" _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}>
            <FaCode size={64} color="blue.500" />
            <Heading as="h3" size="xl" mt={6} mb={4}>
              Enterprise Resource Planning
            </Heading>
            <Text fontSize="lg">Streamline your business processes with our customizable ERP solutions, designed to optimize operations and drive growth.</Text>
          </Box>
          <Box p={6} m={4} maxW="md" borderWidth={2} borderRadius="xl" boxShadow="lg" bg="white" _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}>
            <FaGlobe size={64} color="green.500" />
            <Heading as="h3" size="xl" mt={6} mb={4}>
              Web Development
            </Heading>
            <Text fontSize="lg">Engage your audience with modern, responsive websites and powerful web applications that deliver seamless user experiences.</Text>
          </Box>
          <Box p={6} m={4} maxW="md" borderWidth={2} borderRadius="xl" boxShadow="lg" bg="white" _hover={{ transform: "scale(1.05)", boxShadow: "xl" }}>
            <FaMobile size={64} color="purple.500" />
            <Heading as="h3" size="xl" mt={6} mb={4}>
              Mobile App Development
            </Heading>
            <Text fontSize="lg">Reach your customers on the go with our feature-rich, high-performance mobile applications for iOS and Android.</Text>
          </Box>
        </Flex>
        <Button size="lg" colorScheme="blue" px={8} py={6} fontSize="xl" fontWeight="bold" borderRadius="full" boxShadow="lg" _hover={{ boxShadow: "xl" }} animation={`${fadeIn} 1s ease-out 0.8s`}>
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
