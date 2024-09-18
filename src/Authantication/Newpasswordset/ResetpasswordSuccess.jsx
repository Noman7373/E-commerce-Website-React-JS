import {
  Icon,
  VStack,
  Text,
  Center,
  Box,
  Container,
  Button,
  Card,
} from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ResetpasswordSuccess = () => {
  return (
    <Container>
      <Center minH="50vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
        >
          <VStack spacing={6}>
            <Icon color="green" boxSize="5rem" as={BsPatchCheckFill} />
            <Text
              fontWeight="medium"
              fontSize="2rem"
              textStyle="h4"
              color="p.black"
            >
              Password Reset Done
            </Text>
            <Text
              textAlign="center"
              fontSize="1.8rem"
              textStyle="p2"
              color="black.60"
            >
              Now you can access you account.
            </Text>
          </VStack>
          <Box w="full">
            <Link to="/signin">
              <Button w="full" mt="2rem" fontSize="1.3rem">
                Sign In
              </Button>
            </Link>
          </Box>
        </Card>
      </Center>
    </Container>
  );
};

export default ResetpasswordSuccess;
