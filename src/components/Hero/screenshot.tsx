import Image from "next/image";
import {getBasePath} from "@/app/base-path-loader"

const Screenshot = () => {
    return (
      <div className="container pt-20 mt-30">
        <div className="border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28 rounded-md">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="relative mx-auto aspect-[2428/1034]"
              >
                <Image
                    src={getBasePath() + "/images/hero/mainzelliste-screenshot-en-edit.jpeg"}
                    alt="ui-screenshot"
                    fill
                    className="shadow-2xl mx-auto max-w-full dark:drop-shadow-none lg:mr-0 rounded-lg"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Screenshot;
