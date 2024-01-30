import SectionTitle from "../../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
        <div className="container py-16 mt-20 md:py-20 lg:py-28">
          <SectionTitle
            title="Main functions"/*"Hauptfunktionen"*/
            paragraph=""
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
    </>
  );
};

export default Features;
