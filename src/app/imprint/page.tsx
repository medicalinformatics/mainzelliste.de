import {Metadata} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Imprint",
  // other metadata
};

const Imprint = () => {
  return (
      <>
        <Header showNav={false}/>
        <section className="relative z-10 overflow-hidden pt-28 lg:pt-[150px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 md:w-8/12 lg:w-7/12">
                <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                  <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                    Imprint
                  </h1>
                  <div className="max-w-none mt-24">
                    <h2 className="mb-5 text-lg font-bold text-black dark:text-white sm:text-xl">
                      This website is operated by:</h2>
                    <div className="mb-6">
                      <p>Deutsches Krebsforschungszentrum (German Cancer Research Center, DKFZ)</p>
                      <p>Im Neuenheimer Feld 280</p>
                      <p>69120 Heidelberg</p>
                      <p>Germany</p>
                      <p>Phone: +49 6221 420</p>
                      <p>Internet: www.dkfz.de</p>
                      <p>E-mail: kontakt(at)dkfz.de</p>
                    </div>

                    <h2 className="mb-5 text-lg font-bold text-black dark:text-white sm:text-xl">
                      Legal Form</h2>
                    <div className="mb-6">
                      <p>Deutsches Krebsforschungszentrum</p>
                      <p className="mb-2">Stiftung des öffentlichen Rechts (Foundation under Public
                        Law)</p>
                      <p>Value added tax identification number: DE 143293537</p>
                    </div>

                    <h2 className="mb-5 text-lg font-bold text-black dark:text-white sm:text-xl">
                      Persons Authorized to Represent</h2>
                    <div className="mb-6">
                      <p>Chairman and Scientific Director: Prof. Dr. med. Dr. h.c. Michael
                        Baumann</p>
                      <p>Administrative Director: Ursula Weyrich</p>
                      <p>(address like above)</p>
                    </div>

                    <h2 className="mb-5 text-lg font-bold text-black dark:text-white sm:text-xl">
                      Responsible for Content pursuant to § 18 MStV
                    </h2>
                    <div className="mb-6">
                      <p>Prof. Dr. Martin Lablans, Head of Division</p>
                      <p>Federated Information Systems</p>
                      <p>German Cancer Research Center (DKFZ)</p>
                      <p>(address like above)</p>
                      <p className="mt-2">
                        Email:{" "}
                        <a
                            href="mailto:contact@mainzelliste.de"
                            className="text-blue-600 hover:underline"
                        >
                          contact@mainzelliste.de
                        </a>
                      </p>
                    </div>

                    <h2 className="mb-5 text-lg font-bold text-black dark:text-white sm:text-xl">Hosting</h2>

                    <p className="mb-6">
                      This website is hosted using GitHub Pages.
                    </p>

                    <h2 className="mb-5 text-lg font-bold text-black dark:text-white sm:text-xl">
                      Copyright Notice</h2>
                    <p className="mb-6">
                      All layout, graphics, and content on this website are protected by copyright
                      law.
                      © Deutsches Krebsforschungszentrum (DKFZ). All rights reserved.
                    </p>

                    <h2 className="mb-5 text-lg font-bold text-black dark:text-white sm:text-xl">
                      Disclaimer</h2>
                    <p className="mb-6">
                      While we carefully review our content, we accept no liability
                      for the content of external links. The operators of these linked
                      websites are solely responsible for their own content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <svg
                width="287"
                height="254"
                viewBox="0 0 287 254"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  opacity="0.1"
                  d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                  fill="url(#paint0_linear_111:578)"
              />
              <defs>
                <linearGradient
                    id="paint0_linear_111:578"
                    x1="-40.5"
                    y1="117"
                    x2="301.926"
                    y2="-97.1485"
                    gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7"/>
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
            <span className="absolute right-0 top-0 z-[-1]">
            <svg
                width="628"
                height="258"
                viewBox="0 0 628 258"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  opacity="0.1"
                  d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                  fill="url(#paint0_linear_0:1)"
              />
              <path
                  opacity="0.1"
                  d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                  fill="url(#paint1_linear_0:1)"
              />
              <defs>
                <linearGradient
                    id="paint0_linear_0:1"
                    x1="644"
                    y1="221"
                    x2="429.946"
                    y2="37.0429"
                    gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7"/>
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"/>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_0:1"
                    x1="18.3648"
                    y1="166.016"
                    x2="105.377"
                    y2="32.3398"
                    gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7"/>
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
          </div>
        </section>
        <Footer/>
      </>
  );
};

export default Imprint;
