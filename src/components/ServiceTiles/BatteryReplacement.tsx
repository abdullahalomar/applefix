import { motion } from "framer-motion";
import useScrollGrowHook from "@/hooks/useScrollGrowHook";

const BatteryReplacement = () => {
  const { style, componentRef } = useScrollGrowHook();
  return (
    <motion.div
      className="bg-red-300 h-[415px] rounded-2xl col-span-12"
      style={style}
      ref={componentRef}
    ></motion.div>
  );
};

export default BatteryReplacement;
