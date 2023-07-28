import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import Loading from "../../Components/Loading";
import AnimatedPage from "../../Components/AnimatedPage";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import loginBanner from "../../../assets/loginBanner.svg";

const Login = () => {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  if (pending) setTimeout(() => navigate("/home"), 2000);

  const handleSubmit = () => {
    setPending(true);
  };

  return (
    <AnimatedPage>
      <div className="container">
        <Flex
          h={"100vh"}
          w={"100vw"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <AnimatePresence initial={false} mode="wait">
            {pending ? (
              <Loading key={"loading"} />
            ) : (
              <LoginForm key={"loginForm"} handleSubmit={handleSubmit} />
            )}
          </AnimatePresence>
          <Flex flex={1} justifyContent={"center"} bg={"#fcfcfc"}>
            <Image
              w={{ base: "80%", md: "70%", lg: "60%" }}
              alt={"Login Image"}
              // padding={{ base: 10, md: 200 }}
              src={loginBanner}
            />
          </Flex>
        </Flex>
      </div>
    </AnimatedPage>
  );
};

export default Login;
