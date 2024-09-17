import { Icon, VStack, Text, Center, Box, Container } from "@chakra-ui/react";

import { BsPatchCheckFill } from "react-icons/bs";

const Forgotpasswordsent = () => {
  return (
    <Container>
      <Center minH="256px">
        <VStack spacing={6}>
          <Icon color="#059669" boxSize="3rem" as={BsPatchCheckFill} />
          <Text fontWeight="500" fontSize={22} textStyle="h4" color="black">
            Successfully Sent
          </Text>
          <Text textAlign="center" fontSize={14} fontWeight={400} textStyle="p2"  color="black">
            We have sent instructions on how to reset your password to{" "}
            <Box as="b" color="black">
              abc@gmail.com
            </Box>{" "}
            Please follow the instructions from the email.We hava sent on an
            email verification to{" "}
          </Text>
        </VStack>
      </Center>
    </Container>
  );
};

export default Forgotpasswordsent;
