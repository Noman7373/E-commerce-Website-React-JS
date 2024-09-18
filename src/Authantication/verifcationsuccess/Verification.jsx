import {
  Icon,
  VStack,
  Text,
  Button,
  Center,
  Box,
  Container,
  Card,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import { BsPatchCheckFill } from "react-icons/bs";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import { verifyEmailSuccess } from "../../api/Query/userQuery";

const Verification = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const { token } = useParams();


  const { isSuccess, isLoading } = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: () => verifyEmailSuccess({ token }),
    enabled: !!token,
    onError: (error) => {
      toast({
        title: "SignUp Error",
        description: error.message,
        status: "error",
      });
      navigate("/signup");
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
    <Container>
      <Center minH="50vh">
        {isSuccess && (
          <Card
            p={{
              base: "4",
              md: "10",
            }}
          >
            <VStack spacing={6}>
              <Icon color="green" boxSize="3rem" as={BsPatchCheckFill} />
              <Text textStyle="h4" fontWeight="medium" color="p.black">
                Successfully Registration
              </Text>
              <Text textAlign="center" textStyle="p2" color="black.60">
                Hurray! You have successfully created your account. Enter the
                app to explore all it’s features.
              </Text>
              <Box w="full">
                <Link to="/signin">
                  <Button w="full ">Enter the App</Button>
                </Link>
              </Box>
            </VStack>
          </Card>
        )}
      </Center>
    </Container>
  );
};

export default Verification;
