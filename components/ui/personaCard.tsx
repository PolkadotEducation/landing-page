"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const PersonaCard = ({ title, bullets, image }: { title: string, bullets: string[], image: StaticImageData }) => {
  const t = useTranslations('lp');
  return (
    <div className="flex flex-col md:max-w-[422px] md:h-[606px] w-full items-center
      px-6 py-8 md:border-[#E0E0E0] md:border-2 md:rounded-[8px]"
    >
      <div className="h-[45%]">
        <Image
          src={image}
          className="w-[244px]"
          alt={title}
          unoptimized
        />
      </div>
      <div className="flex flex-col items-center">
        <h6 className="unbound-font text-[20px] mb-4 font-semibold md:font-bold md:text-[34px] md:mb-6 text-center">
          {t(title)}
        </h6>
        <motion.ul className="list-disc">
          {bullets.map(i =>
            <div className="px-5" key={i}>
              <motion.li
                initial={{ x: '-100%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <p className="text-[14px] md:text-[16px] text-[#4D4D4D]">{t(i)}</p>
              </motion.li>
            </div>
          )}
        </motion.ul>
      </div>
    </div>
  );
}

export default PersonaCard;
