'use client';
import Image from "next/image";
import logo from '@/public/assets/icons/logo.svg';
import { Button } from "./button";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations('lp');

  return (
    <div className="flex w-screen bg-white justify-center">
      <div className="flex max-w-[1320px] w-full justify-between py-[14px] items-center px-5">
        <Image
          priority
          src={logo}
          alt="Logo"
          className="w-[199px] h-[19px] md:w-[248px] md:h-[23px]"
          unoptimized
        />
        <Button onClick={() => window.location.href = 'http://app.polkadot.education'}>
          {t('sign-up')}
        </Button>
      </div>
    </div>
  );
};

export default Header;
