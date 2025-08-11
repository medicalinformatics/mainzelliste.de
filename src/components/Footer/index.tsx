"use client";
import Image from "next/image";
import Link from "next/link";
import {getBasePath} from "@/app/base-path-loader"

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-10"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full flex justify-between px-4 mb-6">
              <div className="w-[200px] flex-shrink-0 items-center">
                <Link href="/" className="inline-block">
                  <Image
                    src={getBasePath() + "/images/logo/mainzelliste-logo-650-light.png"}
                    alt="logo"
                    className="w-full hidden dark:block"
                    width={149}
                    height={40}
                  />
                  <Image
                    src={getBasePath() + "/images/logo/mainzelliste-logo-650.png"}
                    alt="logo"
                    className="w-full block dark:hidden"
                    width={149}
                    height={40}
                  />
                </Link>
              </div>
              <div className="self-center items-center flex mb-2">
                <a
                    href="https://www.dkfz.de/en/impressum.html"
                    target="_blank"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-4 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                >Imprint</a>
                <a
                    href="https://www.dkfz.de/en/data-privacy-protection.html"
                    target="_blank"
                    aria-label="social-link"
                    className="dark:text-body-color-dark ml-4 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                >Data privacy protection</a>
              </div>
              <div className="items-center flex mb-2 pl-4 pr-16">
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
