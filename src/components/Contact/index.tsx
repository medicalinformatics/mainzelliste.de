import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] text-center"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-4xl font-bold text-black dark:text-white">
                Need further information?
              </h2>
              <p className="mb-11 text-xl font-medium text-body-color">
                Contact us via e-mail or subscribe to our newsletter.
              </p>
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full pt-2">
                    <Link
                      href="mailto:info@mainzelliste.de"
                      className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary mx-6 px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Contact
                    </Link>
                    <Link
                      href="https://lists.uni-mainz.de/sympa/subscribe/mainzelliste"
                      target="_blank"
                      className="ml-10 shadow-submit dark:shadow-submit-dark rounded-sm bg-primary mx-6 px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Newsletter
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
