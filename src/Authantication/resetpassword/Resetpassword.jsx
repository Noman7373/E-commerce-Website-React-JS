import {
  Box,
  Button,
 
  Center,

  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import "../../theme/index.js";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const Resetpassword = () => {
  return (
    <Container bg="white" h="456px" p={2} maxW="488px">
      <Center minH="100%" flexDirection="column" boxShadow="xs">
        <Text fontSize="22" fontWeight="500" color="#171717">
          Reset Password
        </Text>
        <Text fontSize="14" color="gray.600" mt="4">
          Enter you New Password
        </Text>
        <Formik
          initialValues={{
            password: "",
            repeatpassword: "",
          }}
          onSubmit={(values) => {
            console.log("formValues", values);
          }}
          //   validationSchema={SigninValidationScheme}
        >
          {() => (
            <Form>
              <Stack mt="10" spacing={10} w="300px">
                <Field name="email">
                  {({ field, meta }) => (
                    <FormControl isInvalid={!!(meta.error && meta.touched)}>
                      <FormLabel fontSize="12px" htmlFor="password">
                        New Password
                      </FormLabel>
                      <Input
                        fontSize="12px"
                        fontWeight="500"
                        {...field}
                        id="password"
                        name="password"
                        type="password"
                        placeholder="name@gmail.com"
                        autoComplete="password"
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
                      <FormLabel fontSize="12px" htmlFor="repeatpassword">
                        Repeat New Password
                      </FormLabel>
                      <Input
                        fontSize="12px"
                        fontWeight="500"
                        {...field}
                        id="repeatpassword"
                        name="repeatpassword"
                        type="password"
                        placeholder="Enter Repeat Password"
                        autoComplete="password"
                      />
                      <FormErrorMessage fontSize={12}>
                        {meta.error}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Box>
                  <Button
                    w="full"
                    fontSize={14}
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
