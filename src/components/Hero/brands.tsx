import Image from "next/image";

const Brands = () => {
  return (
      <div className="container pt-16">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="wow fadeInUp bg-[#f4f4f8] dark:bg-[#202836] flex flex-wrap items-center justify-center rounded-sm px-8 py-8">
              <div className="relative mx-auto aspect-[1403/200] h-[70px]">
                <a
                  href={"https://www.dkfz.de/de/index.html"}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="w-full opacity-80 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100"
                >
                  <Image
                    className="hidden dark:block mt-2"
                    src={"/images/brands/logo-dkfz-light.png"}
                    alt={"DKFZ"}
                    sizes="100vw, 50vw, 33vw"
                    fill
                  />
                  <Image
                    className="block dark:hidden mt-2"
                    src={"/images/brands/logo-dkfz.png"}
                    alt={"DKFZ"}
                    sizes="100vw, 50vw, 33vw"
                    fill
                  />
                </a>
              </div>
              <div className="relative mx-auto aspect-[600/200] h-[70px]">
                <a
                  href={"https://www.umm.de/start/"}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="w-full opacity-80 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100"
                >
                  <Image
                    className="hidden dark:block"
                    src={"/images/brands/umm-logo-light.png"}
                    alt={"Universitätsmedizin Mannheim"}
                    sizes="100vw, 50vw, 33vw"
                    fill
                  />
                  <Image
                    className="block dark:hidden"
                    src={"/images/brands/umm-logo.png"}
                    alt={"Universitätsmedizin Mannheim"}
                    sizes="100vw, 50vw, 33vw"
                    fill
                  />
                </a>
              </div>
              <div className="relative mx-auto aspect-[734/200] h-[70px]">
                <a
                  href={"https://www.medizinische-fakultaet-hd.uni-heidelberg.de"}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="w-full opacity-80 hover:opacity-100 dark:opacity-70 dark:hover:opacity-100"
                >
                  <Image
                    className="hidden dark:block"
                    src={"/images/brands/medma-logo-light.png"}
                    alt={"Medizinische Fakultät Mannheim"}
                    sizes="100vw, 50vw, 33vw"
                    fill
                  />
                  <Image
                    className="block dark:hidden"
                    src={"/images/brands/medma-logo.png"}
                    alt={"Medizinische Fakultät Mannheim"}
                    sizes="100vw, 50vw, 33vw"
                    fill
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Brands;
