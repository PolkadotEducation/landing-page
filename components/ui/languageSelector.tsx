"use client";

import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState, useEffect, useTransition } from "react";
import { setUserLocale } from "@/services/locale";
import { getUserLocale } from "@/services/locale";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type Locale = {
  value: string;
  label: string;
  mobile: string;
  image: string;
};

const locales: Locale[] = [
  {
    value: "en",
    label: "English",
    mobile: "En-Us",
    image: "/assets/icons/english.svg",
  },
  {
    value: "pt",
    label: "Português",
    mobile: "Pt-Br",
    image: "/assets/icons/portuguese.svg",
  },
  {
    value: "es",
    label: "Español",
    mobile: "Es-Es",
    image: "/assets/icons/spanish.svg",
  },
];

const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedLocale, setSelectedLocale] = useState<Locale | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const getLocale = async () => {
      const locale = await getUserLocale();
      const localeFound = locales.find(i => i.value === locale);
      setSelectedLocale(localeFound || locales[0]);
      changeLanguage(localeFound?.value || "en");
    }
    setIsMounted(true);
    getLocale();
  }, []);

  if (!isMounted || !selectedLocale) {
    return null;
  }

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex items-center cursor-pointer">
            <Image src={selectedLocale?.image || ""} alt={selectedLocale?.value || ""} width={24} height={24} className="mr-2" />
            {<p>{selectedLocale?.label}</p>}
            <ChevronDown className="ml-2" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0" align="start">
          <LocalesList
            setOpen={setOpen}
            setSelectedLocale={setSelectedLocale}
            changeLanguage={changeLanguage}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="flex items-center">
          <Image src={selectedLocale?.image || ""} alt={selectedLocale?.value || ""} width={24} height={24} className="mr-2" />
          {<p>{selectedLocale?.mobile}</p>}
          <ChevronDown className="ml-2" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <LocalesList
            setOpen={setOpen}
            setSelectedLocale={setSelectedLocale}
            changeLanguage={changeLanguage}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );

  function changeLanguage(locale: string) {
    startTransition(() => {
      setUserLocale(locale);
    });
  }
};

const LocalesList: React.FC<{
  setOpen: (open: boolean) => void;
  setSelectedLocale: (locale: Locale | null) => void;
  changeLanguage: (value: string) => void;
}> = ({ setOpen, setSelectedLocale, changeLanguage }) => (
  <Command>
    <CommandList>
      <CommandGroup>
        {locales.map((locale) => (
          <CommandItem
            key={locale.value}
            value={locale.value}
            onSelect={(value) => {
              setSelectedLocale(
                locales.find((priority) => priority.value === value) || null
              );
              changeLanguage(locale.value);
              setOpen(false);
            }}
          >
            <div className="flex items-center">
              <Image src={locale.image || ""} alt={locale.value || ""} width={24} height={24} className="mr-2" />
              {<p>{locale.label}</p>}
            </div>
          </CommandItem>
        ))}
      </CommandGroup>
    </CommandList>
  </Command>
);

export default LanguageSelector;
