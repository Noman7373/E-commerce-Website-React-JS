import {
  Button,
  Center,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
const signUpValidationScheme = object({
  firstName: string().required("firstName is required"),
  lastName: string().required("lastName is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const Signup = () => {
  return (
    <Container bg="white" h="510px" p={2} maxW="80vh">
      <Center minH="100%" flexDirection="column" boxShadow="xs">
        <Text fontSize="22" fontWeight="500" color="#171717">
          Welcome to e-Commerce Store
        </Text>
        <Text fontSize="14" color="gray.600" mt="4">
          Create a free account by filling out the information below.
        </Text>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log("formValues", values);
          }}
          validationSchema={signUpValidationScheme}
        >
          {() => (
            <Form>
              <Stack mt="10" spacing={10}>
                <Flex gap="5">
                  <Field name="firstName">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel fontSize="12px" htmlFor="firstName">
                          First Name
                        </FormLabel>
                        <Input
                          fontSize="12px"
                          fontWeight="500"
                          {...field}
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Enter Your First Name"
                          autoComplete="firstName"
                        />
                        <FormErrorMessage fontSize={12}>
                          {meta.error}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="lastName">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel fontSize="12px" htmlFor="lastName">
                          Last Name
                        </FormLabel>
                        <Input
                          fontSize="12px"
                          fontWeight="500"
                          {...field}
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Enter Your Last Name"
                          autoComplete="lastName"
                        />
                        <FormErrorMessage fontSize={12}>
                          {meta.error}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>

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
                      <FormErrorMessage fontSize={12}>
                        {meta.error}
                      </FormErrorMessage>
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
                      <FormErrorMessage fontSize={12}>
                        {meta.error}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Checkbox defaultChecked>
                  <Text fontSize="12px">
                    I agree to the{" "}
                    <Text as="span" color="blue.500">
                      Terms & Conditions
                    </Text>
                  </Text>
                </Checkbox>

                <Button type="submit" colorScheme="blue" size="lg">
                  Create Account
                </Button>

                <Text fontSize="12px" color="gray.600" textAlign="center">
                  Already have an account?{" "}
                  <Link to="/signin" color="#5F00D9">
                    Log In
                  </Link>
                </Text>
              </Stack>
            </Form>
          )}
        </Formik>
      </Center>
    </Container>
  );
};

export default Signup;
