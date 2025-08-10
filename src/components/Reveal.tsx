import { motion, useAnimation, useInView } from "motion/react";
import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  full?: boolean;
}

export default function Reveal({ children, full = false }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [mainControls, slideControls, isInView]);

  return (
    <div
      ref={ref}
      className={`${full ? "-mx-4 px-4 sm:mx-0 sm:px-0" : ""}`}
      style={{
        position: "relative",
        overflow: "hidden",
        ...(!full ? { width: "fit-content" } : {}),
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { x: "0%" },
          visible: { x: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "var(--accent)",
          zIndex: 20,
        }}
      />
    </div>
  );
}
