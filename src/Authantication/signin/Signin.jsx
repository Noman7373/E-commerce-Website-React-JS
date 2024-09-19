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
  useToast,
} from "@chakra-ui/react";
import "../../theme/index.js";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { useMutation } from "react-query";
import { signInUser } from "../../api/Query/userQuery.js";
import useData from "../../hooks/useData";

const SigninValidationScheme = object({
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Signin = () => {
  const { logIn } = useData();
  const toast = useToast();
  //  for changes request like DELETE, PUT, PATCH, POST we use [useMutation hook] fro react-query

  const { mutate, isLoading } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signInUser,
    onSuccess: (data) => {
      const { token } = data;
      if (token) {
        logIn(token); // Log in with user data and token
        toast({
          title: "Signed In",
          description: "You have successfully signed in.",
          status: "success",
        });
      } else {
        console.error("Token is undefined in the API response");
      }
    },
    onError: (error) => {
      toast({
        title: "Signin Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <Container bg="white" h="500px" p={2} maxW="80vh">
      <Center h={500} flexDirection="column" boxShadow="xs">
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
        <Text fontSize="20" color="gray.600" mt="4">
          Enter your credentials to access the account
        </Text>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log("formValues", values);
            mutate(values);
          }}
          validationSchema={SigninValidationScheme}
        >
          {() => (
            <Form>
              <Stack mt="10" spacing={10} w="350px">
                <Field name="email">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel fontSize="18px" htmlFor="email">
                        Email
                      </FormLabel>
                      <Input
                        fontSize="18px"
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
                        fontSize="18px"
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

                <HStack justify="space-between">
                  <Checkbox>
                    <Text textStyle="p3" fontSize={15}>
                      Remember me
                    </Text>
                  </Checkbox>{" "}
                  <Link to="/forgot-password">
                    {" "}
                    <Text
                      textStyle="p3"
                      fontSize={15}
                      as="span"
                      color="#5F00D9"
                    >
                      Forget password?
                    </Text>
                  </Link>
                </HStack>

                <Box>
                  <Button
                    isLoading={isLoading}
                    w="full"
                    fontSize={18}
                    type="submit"
                    colorScheme="gray"
                  >
                    Log In
                  </Button>
                  <Link to="/signup">
                    <Button
                      variant="outline"
                      fontSize={18}
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
