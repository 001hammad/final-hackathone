'use client'

// components/CustomDesign/PageTransition.tsx
import dynamic from "next/dynamic";

// Dynamically import motion from framer-motion with no SSR
const MotionDiv = dynamic(() => import("framer-motion").then((mod) => mod.motion.div), { ssr: false });

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </MotionDiv>
  );
};

export default PageTransition;
