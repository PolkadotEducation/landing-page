"use client";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const PersonaCard = ({ title, bullets, image }: { title: string, bullets: string[], image: StaticImageData }) => {
  return (
    <div className="flex flex-col md:flex-row md:max-w-[1144px] md:justify-between items-center justify-center px-5">
      <Image
        src={image}
        className="max-w-full max-h-full md:mr-5"
        alt={title}
        unoptimized
      />
      <div className="flex flex-col md:w-[50%] mt-4 md:mt-0">
        <h6 className="unbound-font text-[20px] mb-4 font-semibold md:font-bold md:text-[34px] md:mb-6">
          {title}
        </h6>
        <motion.ul className="list-disc">
          {bullets.map(i =>
            <div className="px-5" key={i}>
              <motion.li
                initial={{ x: '-100%', opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <p className="text-[14px] md:text-[16px] text-[#4D4D4D]">{i}</p>
              </motion.li>
            </div>
          )}
        </motion.ul>
      </div>
    </div>
  );
}

export default PersonaCard;
