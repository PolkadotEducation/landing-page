'use client';
import Image from "next/image";
import { Button } from "./button";
import { mobile } from "@/public/assets/images";
import { motion } from "framer-motion"
import { useTranslations } from 'next-intl';

const HeroBanner = () => {
  const t = useTranslations('lp');

  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1320px] pt-12 md:pt-[120px] px-5 md:relative">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex md:max-w-[50%]">
          <div className="flex-col">
            <h2 className="unbound-font md:text-6xl text-[34px] mb-4 md:mb-6 font-bold md:font-light">
              {t('hero-title')}
            </h2>
            <p className="mb-6 md:mb-8 text-[#4D4D4D]">
              {t('hero-description')}
            </p>
            <div className="mb-8 md:mb-0">
              <Button onClick={() => window.location.href = 'http://app.polkadot.education'} size="lg">
                {t('get-started')}
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center h-fit md:absolute bottom-0 md:right-0 md:top-20">
          <Image
            src={mobile}
            width={320}
            height={640}
            alt="Mobile View"
            className="hover:scale-105 transition-transform"
            unoptimized
          />
        </div>
      </motion.div>
    </div>
  );
}

export default HeroBanner;
