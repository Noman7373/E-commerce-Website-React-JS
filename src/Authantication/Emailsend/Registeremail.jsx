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
import { MdEmail } from "react-icons/md";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import { sendVerifyEmail } from "../../api/Query/userQuery";
import { useEffect } from "react";

const Registeremail = () => {
  // const location = useLocation();

  // const email = location.state?.email ?? "";

  // const toast = useToast();
  // // const navigate = useNavigate();

  const { email } = useParams();

  if (email === "") return <Center h="100vh">Invalid Email</Center>;

  const { mutate, isLoading } = useMutation({
    mutationKey: ["sendverifyemail"],
    mutationFn: () => sendVerifyEmail({ email }),
    onSuccess: (data) => {
      console.log(data);
      
    },

    onError: (error) => {
      toast({
        title: "Email Verifcation Error",
        description: error.message,
        status: "error",
      });
    },
    enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  }, []);

  // if (isLoading)
  //   return (
  //     <Center h="100vh">
  //       <Spinner />
  //     </Center>
  //   );

  return (
    <Container>
      <Center minH="50vh" width={400}>
        {/* {isSuccess && ( */}
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          // showCard={true}
        >
          <VStack spacing={6}>
            <Icon color="purple" boxSize="3rem" as={MdEmail} />
            <Text
              textStyle="h4"
              fontSize={30}
              fontWeight="medium"
              color="black"
            >
              Email Verification
            </Text>
            <Text textAlign="center" textStyle="p2" color="black" fontSize={18}>
              We have sent instructions on how to reset your password to{" "}
              <Box as="b" color="black">
                {email}
              </Box>{" "}
              If you didn’t receive it, click the button below.{" "}
            </Text>
            <Box w="full">
              <Button
                w="full "
                variant="outline"
                fontSize={20}
                onClick={() => mutate({ email })}
                isLoading={isLoading}
              >
                Re-send Email
              </Button>
            </Box>
          </VStack>
        </Card>
        {/* )} */}
      </Center>
    </Container>
  );
};

export default Registeremail;
