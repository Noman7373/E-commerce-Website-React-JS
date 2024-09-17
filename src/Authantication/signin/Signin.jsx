import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import "../../theme/index.js";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";

const SigninValidationScheme = object({
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Pssword is required"),
});

const Signin = () => {
  //  for changes request like DELETE, PUT, PATCH, POST we use [useMutation hook] fro react-query

  return (
    <Container bg="white" h="456px" p={2} maxW="80vh">
      <Center minH="100%" flexDirection="column" boxShadow="xs">
        <Text fontSize="22" fontWeight="500" color="#171717">
          Welcome to e-Commerce Store
        </Text>
        <Text fontSize="14" color="gray.600" mt="4">
          Enter your credentials to access the account
        </Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log("formValues", values);
          }}
          validationSchema={SigninValidationScheme}
        >
          {() => (
            <Form>
              <Stack mt="10" spacing={10} w="300px">
                <Field name="email">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel fontSize="12px" htmlFor="email">
                        Email
                      </FormLabel>
                      <Input
                        fontSize="12px"
                        fontWeight="500"
                        {...field}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@gmail.com"
                        autoComplete="email"
                      />
                      <FormErrorMessage fontSize={12}>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel fontSize="12px" htmlFor="password">
                        Password
                      </FormLabel>
                      <Input
                        fontSize="12px"
                        fontWeight="500"
                        {...field}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter Your Password"
                        autoComplete="password"
                      />
                      <FormErrorMessage fontSize={12}>{meta.error}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <HStack justify="space-between">
                  <Checkbox>
                    <Text textStyle="p3" fontSize={12}>
                      Remember me
                    </Text>
                  </Checkbox>{" "}
                  <Link to="/forgot-password">
                    {" "}
                    <Text
                      textStyle="p3"
                      fontSize={12}
                      as="span"
                      color="#5F00D9"
                    >
                      Forget password?
                    </Text>
                  </Link>
                </HStack>

                <Box>
                  <Button
                    w="full"
                    fontSize={14}
                    type="submit"
                    colorScheme="gray"
                  >
                    Log In
                  </Button>
                  <Link to="/signup">
                    <Button
                      variant="outline"
                      fontSize={14}
                      fontWeight={500}
                      mt="3"
                      width="full"
                    >
                      Create new acount
                    </Button>
                  </Link>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
      </Center>
    </Container>
  );
};

export default Signin;
