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
  useToast,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { useMutation } from "react-query";
import { signUpUser } from "../../api/Query/userQuery";
import { useState } from "react";

const signUpValidationScheme = object({
  firstName: string().required("firstName is required"),
  lastName: string().required("lastName is required"),
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
const Signup = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: signUpUser,
    onSuccess: (data) => {
      if (email !== "") {
        navigate(`/register-email-verify/${email}`);
      }
    },

    onError: (error) => {
      toast({
        title: "SignUp Error",
        description: error.message,
        status: "error",
      });
    },
  });
  return (
    <Container bg="white" p={2} maxW="80vh">
      <Center flexDirection="column" boxShadow="xs">
        <Text
          fontWeight="500"
          color="#171717"
          fontSize={{
            base: "2xl",
            sm: "2xl",
            lg: "2xl",
            xl: "3xl",
          }}
        >
          Welcome to e-Commerce Store
        </Text>
        <Text fontSize="18" color="gray.600" mt="4">
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
            setEmail(values.email);
            console.log(email);

            mutate({
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
            });
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
                        <FormLabel fontSize="18px" htmlFor="firstName">
                          First Name
                        </FormLabel>
                        <Input
                          fontSize="15px"
                          fontWeight="500"
                          {...field}
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Enter Your First Name"
                          autoComplete="firstName"
                        />
                        <FormErrorMessage fontSize={15}>
                          {meta.error}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Field name="lastName">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel fontSize="18px" htmlFor="lastName">
                          Last Name
                        </FormLabel>
                        <Input
                          fontSize="18px"
                          fontWeight="500"
                          {...field}
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Enter Your Last Name"
                          autoComplete="lastName"
                        />
                        <FormErrorMessage fontSize={15}>
                          {meta.error}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </Flex>

                <Field name="email">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel fontSize="18px" htmlFor="email">
                        Email
                      </FormLabel>
                      <Input
                        fontSize="15px"
                        fontWeight="500"
                        {...field}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@gmail.com"
                        autoComplete="email"
                      />
                      <FormErrorMessage fontSize={15}>
                        {meta.error}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel fontSize="18px" htmlFor="password">
                        Password
                      </FormLabel>
                      <Input
                        fontSize="15px"
                        fontWeight="500"
                        {...field}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter Your Password"
                        autoComplete="password"
                      />
                      <FormErrorMessage fontSize={15}>
                        {meta.error}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Checkbox disableddefaulchecked="true">
                  <Text fontSize="18px">
                    I agree to the{" "}
                    <Text as="span" color="blue.500">
                      Terms & Conditions
                    </Text>
                  </Text>
                </Checkbox>

                <Button
                  isLoading={isLoading}
                  type="submit"
                  colorScheme="blue"
                  fontSize={18}
                >
                  Create Account
                </Button>

                <Text fontSize="18px" color="gray.600" textAlign="center">
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
