import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Link as={RouterLink} to="/" color="white" p={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/chat" color="white" p={2}>
          Chat
        </Link>
        <Link as={RouterLink} to="/documents" color="white" p={2}>
          Documents
        </Link>
        <Link as={RouterLink} to="/profile" color="white" p={2}>
          Profile
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;
