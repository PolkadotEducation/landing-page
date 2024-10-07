'use client';

import Image from "next/image";
import logo from '@/public/assets/icons/logo.svg';
import logoMobile from '@/public/assets/icons/logoMobile.svg';
import { Button } from "./button";
import { useTranslations } from "next-intl";
import LanguageSelector from "./languageSelector";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useEffect, useState } from "react";

const Header = () => {
  const t = useTranslations('lp');

  const isDesktopInitial = useMediaQuery("(min-width: 768px)");
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(isDesktopInitial);
  }, [isDesktopInitial]);

  return (
    <div className="flex w-screen bg-white justify-center">
      <div className="flex max-w-[1320px] w-full justify-between py-[14px] items-center px-5">
        <Image
          priority
          src={isDesktop ? logo : logoMobile}
          alt="Logo"
          width={isDesktop ? 248 : 29}
          height={isDesktop ? 23 : 29}
          className={isDesktop ? "w-[199px] h-[19px] md:w-[248px] md:h-[23px]" : "w-[29px] h-[29px]"}
          unoptimized
        />
        <div className="flex gap-x-4 md:gap-x-10 items-center">
          <LanguageSelector />
          <Button onClick={() => window.location.href = 'http://app.polkadot.education'}>
            {t('sign-up')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
