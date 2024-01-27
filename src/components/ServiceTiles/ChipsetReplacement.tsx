import useScrollGrowHook from "@/hooks/useScrollGrowHook";
import { motion } from "framer-motion";

const ChipsetReplacement = () => {
  const { style, componentRef } = useScrollGrowHook();
  return (
    <motion.div
      className="bg-red-300 h-[415px] rounded-2xl col-span-6 lg:col-span-5"
      ref={componentRef}
      style={style}
    ></motion.div>
  );
};

export default ChipsetReplacement;
