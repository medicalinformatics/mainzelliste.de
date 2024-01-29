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
            <div className="w-full flex px-4 mb-12">
              <div className="w-[200px] flex-shrink-0">
                <Link href="/" className="mb-4 inline-block">
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
                
                <div className="mb-100 flex items-center ml-3">
                  <a
                    href="https://bitbucket.org/medicalinformatics/mainzelliste/src/master/"
                    target="_blank"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <Image
                      className="hidden dark:block"
                      src="/images/footer/bitbucket-logo.png"
                      alt="bitbucket"
                      width={30}
                      height={30}
                    />
                    <Image
                      className="block dark:hidden"
                      src="/images/footer/bitbucket-logo.png"
                      alt="bitbucket"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a
                    href="https://github.com/medicalinformatics/mainzelliste-gui"
                    target="_blank"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
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
              <div className="ml-10 flex-grow-[1] dark:text-body-color-dark text-base leading-relaxed text-body-color mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Integer lobortis.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
