import { Brand } from "@/types/brand";

const brandsData: Brand[] = [
  {
    id: 1,
    width: "w-96",
    name: "DKFZ",
    href: "https://www.dkfz.de/de/index.html",
    image: "/images/brands/logo-dkfz.png",
    imageLight: "/images/brands/logo-dkfz-light.png",
  },
  {
    id: 2,
    name: "Universitätsmedizin Mannheim",
    width: "w-48",
    href: "https://www.umm.de/start/",
    image: "/images/brands/umm-logo.png",
    imageLight: "/images/brands/umm-logo-light.png",
  },
  {
    id: 3,
    name: "Medizinische Fakultät Mannheim",
    width: "w-72",
    href: "https://www.medizinische-fakultaet-hd.uni-heidelberg.de",
    image: "/images/brands/medma-logo.png",
    imageLight: "/images/brands/medma-logo-light.png",
  }
];

export default brandsData;
