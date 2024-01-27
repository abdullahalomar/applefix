import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macbook from "../../assets/images/macbook-air.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -500 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring" } },
};

const laptop = {
  initial: { y: 0, rotate: 0, scale: 5 },
  animate: {
    y: 50,
    rotate: -30,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        repeat: Infinity,
        duration: 2,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const HeroSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <Container className="h-screen pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center mt-20 gap-12">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-5xl font-bold lg:text-8xl text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry,</span> <br />{" "}
            <span>we'll fix it.</span>
          </motion.h1>
          <motion.p
            className="text-dark-gray max-w-[50ch] my-5 text-lg"
            variants={introChildren}
          >
            Welcome to{" "}
            <span className="text-primary-foreground font-semibold">
              iRepair
            </span>
            , your one-stop place for all kinds of <br />
            <span className="text-primary-foreground font-semibold">
              Macbook repairs
            </span>{" "}
            and diagnostics
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-14"
          variants={laptop}
          initial="initial"
          animate="animate"
        >
          <img
            className="h-[95%] object-contain"
            src={macbook}
            width={500}
            alt=""
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
