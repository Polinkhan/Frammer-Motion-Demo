import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react";
import AnimatedPage from "../../Components/AnimatedPage";

const LoginForm = ({ handleSubmit }: any) => {
  return (
    <AnimatedPage style={{ flex: 1, display: "flex", zIndex: 2 }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox defaultChecked>Remember me</Checkbox>
              <Text color={"blue.500"}>Forgot password?</Text>
            </Stack>
            <Button
              colorScheme={"blue"}
              variant={"solid"}
              onClick={handleSubmit}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </AnimatedPage>
  );
};

export default LoginForm;
