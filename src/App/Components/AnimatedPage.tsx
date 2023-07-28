import { motion } from "framer-motion";

const animations = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
};

// interface CuntomAnimatedPage extends AnimationProps {
//   style?: StyleProps;
// }

const AnimatedPage = (props: any) => {
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      {...props}
    />
  );
};

export default AnimatedPage;
