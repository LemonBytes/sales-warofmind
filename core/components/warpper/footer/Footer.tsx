import Link from "next/link";
import React from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import tiktok from "../../../../public/static/images/icons/tiktok-icon.svg";
import Image from "next/image";




const Footer = () => {
  const linkTexts = ["LEGAL NOTICE", "CONTACT US", "FAQs", "PRIVACY POLICY", "DISCLAIMER"];
  return (
    <footer className="relative bottom-0 w-screen flex">
      <div className="flex flex-col justify-center items-center w-[61vw]">
      {
        linkTexts.map((text, index) => (
          <Link href="/" key={index} className="text-sm text-balck hover:text-gray-700 outline outline-0.5 w-full h-16 flex items-center text-4xl">
            {text}
          </Link>
        ))
      }
      </div>
      <div className="flex  justify-center items-center w-[29vw]">
      <InstagramIcon   fontSize="large" />
      <YouTubeIcon  fontSize="large" />
      <Image src={tiktok} alt="tiktok" width={20} height={20} />
      </div>
    </footer>
  );
};

export default Footer;
