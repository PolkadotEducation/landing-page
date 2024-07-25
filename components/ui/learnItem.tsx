import { useTranslations } from "next-intl";
import Image from "next/image";

const LearnItem = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
  const t = useTranslations('lp');

  return (
    <div className="flex flex-col justify-center items-center max-w-[384px] px-4 hover:scale-105 transition-transform">
      <Image
        src={icon}
        className="mb-6"
        width={32}
        height={32}
        alt="Icon"
        unoptimized
      />
      <h5 className="unbound-font mb-2 text-[24px] font-bold md:font-light">
        {t(title)}
      </h5>
      <p className="font-light text-[#4D4D4D]">
        {t(description)}
      </p>
    </div>
  );
}

export default LearnItem;
