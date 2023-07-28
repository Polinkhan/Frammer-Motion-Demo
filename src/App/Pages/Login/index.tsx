import { Stack, Flex, Image, Box } from "@chakra-ui/react";
import { useEffect, useId, useState } from "react";
import Loading from "../../Components/Loading";
import AnimatedPage from "../../Components/AnimatedPage";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  if (pending) setTimeout(() => navigate("/home"), 3000);

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
          <Flex flex={1}>
            <Image
              alt={"Login Image"}
              objectFit={"cover"}
              src={
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
              }
            />
          </Flex>
        </Flex>
      </div>
    </AnimatedPage>
  );
};

export default Login;
