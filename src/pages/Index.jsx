import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Box, HStack, IconButton, useToast } from "@chakra-ui/react";
import { FaUpload, FaSignInAlt, FaFilePdf, FaFileWord, FaFileExcel } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [documents, setDocuments] = useState([]);
  const toast = useToast();

  const handleLogin = () => {
    // Simulate login
    setIsLoggedIn(true);
    toast({
      title: "Logged in successfully.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocuments([...documents, file]);
      toast({
        title: "File uploaded successfully.",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        {!isLoggedIn ? (
          <>
            <Text fontSize="2xl">Login</Text>
            <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
              Login
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="2xl">Welcome, {username}</Text>
            <HStack spacing={4}>
              <Input type="file" onChange={handleFileUpload} display="none" id="file-upload" />
              <label htmlFor="file-upload">
                <IconButton as="span" icon={<FaUpload />} colorScheme="teal" />
              </label>
            </HStack>
            <Box width="100%">
              {documents.map((doc, index) => (
                <HStack key={index} spacing={4} mt={4}>
                  {doc.type === "application/pdf" && <FaFilePdf />}
                  {doc.type === "application/msword" && <FaFileWord />}
                  {doc.type === "application/vnd.ms-excel" && <FaFileExcel />}
                  <Text>{doc.name}</Text>
                </HStack>
              ))}
            </Box>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
