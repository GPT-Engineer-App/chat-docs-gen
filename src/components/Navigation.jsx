import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-around">
        <Link as={RouterLink} to="/" color="white">
          Home
        </Link>
        <Link as={RouterLink} to="/chat" color="white">
          Chat
        </Link>
        <Link as={RouterLink} to="/documents" color="white">
          Documents
        </Link>
        <Link as={RouterLink} to="/profile" color="white">
          Profile
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;
