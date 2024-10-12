import Image from "next/image";
import logo from '@/public/assets/icons/logo.svg';
import github from '@/public/assets/icons/github.svg';
import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const t = useTranslations("lp");

  return (
    <div className="bg-[#F3F5FB] w-full flex justify-center mt-6 py-10">
      <div className="px-5 max-w-[1320px] w-full border-b-2 border-b-black flex flex-col xl:flex-row justify-between pb-4 xl:pb-8">
        <div className="flex flex-col gap-y-6">
          <Image
            src={logo}
            alt="Logo"
            className="w-[269px] h-[78px]"
            unoptimized
          />
          <p>support@polkadot.education</p>
        </div>
        <div className="flex flex-col gap-y-4 xl:gap-y-6">
          <h6 className="font-bold text-[20px]">{t("follow")}</h6>
          <Link href="https://github.com/PolkadotEducation" target="_blank">
            <Image src={github} width={32} height={32} alt="github icon" unoptimized />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
