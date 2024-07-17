'use client';
import { Button } from "./button";
import Image from "next/image";
import { phoneBottom, phoneTop } from "@/public/assets/images";
import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  offscreen: {
    x: '-100%',
    opacity: 0
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
      duration: 1,
    }
  }
}

const imageVariants: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const PhoneSection = () => {
  return (
    <div className="flex flex-col max-w-[1320px] px-5 py-[32px] md:py-[82px] md:relative mb-8 md:mb-0">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.5, once: true }}
      >
        <motion.div variants={imageVariants}>
          <div className="flex justify-center h-fit md:absolute md:right-[28px] md:bottom-0">
            <Image
              src={phoneTop}
              width={232}
              height={464}
              alt="Mobile View Top"
              className="hover:scale-x-105 transition-transform"
              unoptimized
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 1, once: true }}
      >
        <motion.div variants={imageVariants}>
          <div className="hidden md:flex justify-center h-fit md:absolute md:right-[242px] lg:right-[282px] md:top-0">
            <Image
              src={phoneBottom}
              width={232}
              height={464}
              alt="Mobile View Bottom"
              className="hover:scale-x-105 transition-transform"
              unoptimized
            />
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.3, once: true }}
      >
        <div className="flex flex-col md:max-w-[35%] text-white">
          <motion.div variants={textVariants}>
            <h3 className="font-bold md:font-light unbound-font text-[48px] mb-[16px]">
              Learn from anywhere
            </h3>
          </motion.div>
          <motion.div variants={textVariants}>
            <p className="text-[16px] mb-[16px]">
              Don’t miss the opportunity to develop essential skills to lead the next digital era. Join us on this exciting journey and discover how blockchain and Polkadot are shaping the future. We look forward to helping you achieve your goals and become an expert in this dynamic and innovative field. 
            </p>
          </motion.div>
          <motion.div variants={textVariants}>
            <p className="text-[16px] mb-8 md:mb-12">
              Let’s start the transformation together - click below to sign up now!
            </p>
          </motion.div>
          <motion.div variants={textVariants}>
            <div>
              <Button variant="outline" onClick={() => window.location.href = 'http://app.polkadot.education'} size="lg">
                Sign Up
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default PhoneSection;
