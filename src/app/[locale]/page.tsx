import Header from "@/components/ui/header";
import HeroBanner from "@/components/ui/heroBanner";
import { heroBg } from "@/public/assets/images";
import { LEARN_ITEMS, PERSONA_LIST } from "./constants";
import LearnItem from "@/components/ui/learnItem";
import PhoneSection from "@/components/ui/phoneSection";
import PersonaCard from "@/components/ui/personaCard";
import Footer from "@/components/ui/footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('lp');

  return (
    <main className="flex min-h-screen w-screen flex-col items-center bg-white">
      <div className="flex flex-col items-center max-w-[1320px]">
        <Header />
        <div
          className="flex md:h-[752px] w-screen justify-center bg-center"
          style={{ backgroundImage: `url(${heroBg.src})` }}
        >
          <HeroBanner />
        </div>
        <div className="flex flex-col justify-center mt-[64px] px-5 text-center">
          <h3 className="text-[34px] md:text-[48px] font-bold md:font-light unbound-font mb-2">
            {t('learn-section-title')}
          </h3>
          <p className="mb-6 md:mb-16">
            {t('learn-section-description')}
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            {LEARN_ITEMS.map((i, index) =>
              <LearnItem
                key={index}
                title={i.title}
                description={i.description}
                icon={i.icon}
              />
            )}
          </div>
        </div>
      </div>
      <div className="bg-[#321D47] flex w-full justify-center mt-8 md:mt-8">
        <PhoneSection />
      </div>
      <div className="flex flex-col items-center justify-center mt-8 md:mt-16">
        <div className="px-6">
          <h3 className="text-[34px] md:text-[48px] font-bold md:font-light unbound-font md:mb-[70px]">
            {t('persona-title')}
          </h3>
        </div>
        <div className="flex flex-col md:flex-row md:gap-y-20 md:gap-x-6">
          {PERSONA_LIST.map(i =>
            <PersonaCard
              key={i.title}
              title={i.title}
              image={i.image}
              bullets={i.bullets}
            />
          )}
        </div>
      </div>
      <div className="bg-[#F3F5FB] w-full flex justify-center mt-6">
        <Footer />
      </div>
    </main>
  );
}
