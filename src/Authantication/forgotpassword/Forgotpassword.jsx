import {
  Icon,
  VStack,
  Text,
  Button,
  Center,
  Box,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input,
  Container,
  Stack,
  Card,
  useToast,
} from "@chakra-ui/react";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { sendForgotMail } from "../../api/Query/userQuery";
const Forgotpassword = () => {
  const toast = useToast();
  const ForgotValidationScheme = object({
    email: string().email("Email is invalid").required("Email is required"),
  });

  const { mutate, isSuccess, isLoading } = useMutation({
    mutationKey: ["ForgotEmail"],
    mutationFn: sendForgotMail,
    onSettled: (data) => {
      console.log(data);
    },
    onError: (error) => {
      toast({
        title: "Forgot Error",
        description: error.message,
        status: "error",
      });
    },
  });

  return (
    <>
      <Container h="550px">
        <Center h="550px">
          <Card
            p={{
              base: "4",
              md: "10",
            }}
          >
            <VStack spacing={5}>
              <Link to="/signin">
                {" "}
                <Icon boxSize="3rem" as={HiArrowSmallLeft} />
              </Link>
              <Text mt="4" fontSize={30} color="#171717" fontWeight="500">
                Forgot Password{" "}
              </Text>
              <Text textAlign="center" fontSize={18} color="#797E82">
                Enter your email address for which account you want to reset
                your password.
              </Text>
              <Formik
                initialValues={{
                  email: "",
                }}
                onSubmit={(values) => {
                  console.log(values);
                  mutate({ email: values.email });
                }}
                validationSchema={ForgotValidationScheme}
              >
                <Form>
                  <Stack mt="3" spacing={6}>
                    <Field name="email">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel fontSize={18} htmlFor="email">
                            Email
                          </FormLabel>
                          <Input
                            w="250px"
                            py="20px"
                            fontSize={18}
                            {...field}
                            autoComplete="email"
                            name="email"
                            type="email"
                            placeholder="name@gamil.com"
                          />
                          <FormErrorMessage fontSize={15}>
                            {meta.error}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>

                    <Box w="full" h="5rem" fontWeight={500}>
                      <Button
                        w="full"
                        h="38px"
                        type="submit"
                        fontSize={18}
                        variant="outline"
                        isLoading={isLoading}
                        onClick={() => mutate()}
                      >
                        Reset Password
                      </Button>
                    </Box>
                  </Stack>
                </Form>
              </Formik>
            </VStack>
          </Card>
        </Center>
      </Container>
    </>
  );
};

export default Forgotpassword;
