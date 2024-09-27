import Breadcrumb from "@/components/Common/Breadcrumb";

import {Metadata} from "next";

export const metadata: Metadata = {
  title: "Imprint",
  // other metadata
};

const Imprint = () => {
  return (
    <>
      <Breadcrumb
        pageName="Impressum"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
    </>
  );
};

export default Imprint;
