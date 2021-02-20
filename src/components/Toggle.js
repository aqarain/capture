import { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle && children}
      <div className="faq-line" />
    </motion.div>
  );
};

export default Toggle;
