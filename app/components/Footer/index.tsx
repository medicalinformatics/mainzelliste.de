"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-10"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full flex px-4 mb-6">
              <div className="w-[200px] flex-shrink-0 items-center">
                <Link href="/" className="inline-block">
                  <Image
                    src="/images/logo/mainzelliste-logo-650-light.png"
                    alt="logo"
                    className="w-full hidden dark:block"
                    width={149}
                    height={40}
                  />
                  <Image
                    src="/images/logo/mainzelliste-logo-650.png"
                    alt="logo"
                    className="w-full block dark:hidden"
                    width={149}
                    height={40}
                  />
                </Link>
                
            
              </div>
              <div className="items-center flex ml-auto mb-2 w-[130px] px-4">
                <a
                    href="https://bitbucket.org/medicalinformatics/mainzelliste/src/master/"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <Image
                      className="block"
                      src="/images/footer/bitbucket-logo.png"
                      alt="bitbucket"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a
                    href="https://github.com/medicalinformatics/mainzelliste-gui"
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label="social-link"
                    className="float-right"
                  >
                    <Image
                      className="hidden dark:block"
                      src="/images/footer/github-mark-light.png"
                      alt="github"
                      width={30}
                      height={30}
                    />
                    <Image
                      className="block dark:hidden"
                      src="/images/footer/github-mark.png"
                      alt="github"
                      width={30}
                      height={30}
                    />
                  </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
