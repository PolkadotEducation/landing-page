import Image from "next/image";
import logo from '@/public/assets/icons/logo.svg';

const Footer = () => {
  return (
    <div className="h-40 md:h-60 px-5 max-w-[1320px] w-full pt-8 md:pt-16">
      <Image
        priority
        src={logo}
        alt="Logo"
        className="md:w-[490px] md:h-[47px] w-[248px] h-[23px]"
        unoptimized
      />
    </div>
  );
}

export default Footer;
