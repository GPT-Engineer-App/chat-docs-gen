import { Box, Heading, Input, VStack, useToast } from "@chakra-ui/react";
import { useState } from "react";

function Documents() {
  const [documents, setDocuments] = useState([]);
  const toast = useToast();

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setTimeout(() => {
        setDocuments([...documents, file]);
        toast({
          title: "File uploaded and processed successfully.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      }, 1000);
    }
  };

  return (
    <Box p={4}>
      <Heading>Documents Page</Heading>
      <VStack spacing={4} mt={4}>
        <Input type="file" onChange={handleFileUpload} />
        {documents.map((doc, index) => (
          <Box key={index} p={2} borderWidth={1} borderRadius="md" width="100%">
            {doc.name}
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default Documents;
