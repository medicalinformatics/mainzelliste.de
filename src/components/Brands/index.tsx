'use client';
import projectsData from "@/components/Brands/projectsData";
import {Project} from "@/types/project";
import {Tooltip} from 'react-tooltip';
import SectionTitle from "@/components/Common/SectionTitle";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <h2 className="mb-10 text-3xl font-bold text-black dark:text-white text-center">
          Trusted By These Projects:
        </h2>
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {projectsData.map((brand) => (
                <SingleBrand key={brand.id} project={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ project }: { project: Project }) => {
  const { href, name, extendedName } = project;

  return (
      <div className={ "flex items-start justify-center px-3 py-[15px]"}>
        <a
            data-tooltip-id="my-tooltip"
            data-tooltip-content={extendedName}
            data-tooltip-place="top"
            href={href}
            target="_b<>lank"
            rel="nofol</>low noreferrer"
            className="font-bold text-2xl relative w-full opacity-55 transition hover:opacity-100 dark:opacity-30 dark:hover:opacity-100"
        >
          {name}
        </a>
        <Tooltip id="my-tooltip" />
      </div>
    // <div className={ "flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/3 md:" + width + " lg:" + width +" xl:" + width}>
    //   <a
    //     href={href}
    //     target="_blank"
    //     rel="nofollow noreferrer"
    //     className="relative h-16 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
    //   >
    //     <Image src={getBasePath() + imageLight} alt={name} fill className="hidden dark:block" />
    //     <Image src={getBasePath() + image} alt={name} fill className="block dark:hidden" />
    //   </a>
    // </div>
  );
};
