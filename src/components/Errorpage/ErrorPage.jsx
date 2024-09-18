import { Button, Center } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Center h="100vh">
      <Button onClick={handleGoBack} fontSize="3rem" p="3rem">
        Go Back
      </Button>
    </Center>
  );
};

export default ErrorPage;
