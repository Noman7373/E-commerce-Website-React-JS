import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spinner,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import "../../theme/index.js";
import { Formik, Form, Field } from "formik";
import { object, ref, string } from "yup";
import { useMutation } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fogotPasswordSuccess } from "../../api/Query/userQuery.js";
const resetPasswordScheme = object({
  password: string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat Password is Required"),
});

const Resetpassword = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { token, password } = useParams();

  const { mutate, isLoading } = useMutation({
    mutationKey: ["verify-fogot-token"],
    mutationFn: fogotPasswordSuccess,
    enabled: !!token && !!password,
    onError: (error) => {
      toast({
        title: "Password is not define",
        description: error.message,
        status: "error",
      });
      navigate("/signup");
    },
    onSettled: () => {
      navigate(`/reset-success`);
    },
  });

  if (isLoading)
    return (
      <Center h="100vh">
        {" "}
        <Spinner />
      </Center>
    );

  return (
    <Container bg="white" h="456px" p={2} maxW="450px">
      <Center minH="100%" flexDirection="column" boxShadow="xs">
        <Text fontSize="30" fontWeight="500" color="#171717">
          Reset Password
        </Text>
        <Text fontSize="20" color="gray.600" mt="4">
          Enter you New Password
        </Text>
        <Formik
          initialValues={{
            password: "",
            repeatpassword: "",
          }}
          onSubmit={(values) => {
            console.log("formValues", values);
            mutate({
              token,
              password: values.password,
            });
          }}
          validationSchema={resetPasswordScheme}
        >
          {() => (
            <Form>
              <Stack mt="10" spacing={10} w="350px">
                <Field name="password">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel fontSize="18px" htmlFor="password">
                        New Password
                      </FormLabel>
                      <Input
                        fontSize="18px"
                        fontWeight="500"
                        {...field}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Enter You Password"
                        autoComplete="password"
                      />
                      <FormErrorMessage fontSize={15}>
                        {meta.error}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="repeatpassword">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel fontSize="18px" htmlFor="repeatpassword">
                        Repeat New Password
                      </FormLabel>
                      <Input
                        fontSize="18px"
                        fontWeight="500"
                        {...field}
                        id="repeatpassword"
                        name="repeatpassword"
                        type="password"
                        placeholder="Repeat your password"
                        autoComplete="password"
                      />
                      <FormErrorMessage fontSize={15}>
                        {meta.error}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Box>
                  <Button
                    w="full"
                    fontSize={18}
                    type="submit"
                    colorScheme="gray"
                  >
                    Reset Password
                  </Button>
                </Box>
              </Stack>
            </Form>
          )}
        </Formik>
      </Center>
    </Container>
  );
};

export default Resetpassword;
