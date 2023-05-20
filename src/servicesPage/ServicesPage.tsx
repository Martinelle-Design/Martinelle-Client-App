import PageTitle from "../utilities/pageTitle/PageTitle";
const namespace = "services-pg";
type ServiceRowProps = {
  title: string;
  imgUrl?: string;
  imgPlaceholderUrl?: string;
  imgDescription?: string;
  items: string[];
};
const servicesData: ServiceRowProps[] = [
  {
    title: "MARKETS",
    items: [
      "Residential Design",
      "Retail Design",
      "Restaurant Design",
      "Hospitality Design ",
      "Workplace Design",
      "Pop-Up Experiences",
      "Shop-In-Shop’s",
      "Sports & Entertainment Venues",
      "Multifamily Developments",
      "Senior / Student Living",
      "Experience Adaptations",
      "Landscape / Gardens Design",
      "Mixed-Use",
      "Multifamily Residential",
      "Art Galleries",
      "Venues",
    ],
  },
  {
    title: "ARCHITECTURE/ INTERIOR DESIGN",
    items: [
      "Project planning",
      "Floor Plans",
      "Concept development",
      "Color & Material Selection",
      "Options Selection",
      "Artwork & Accessory",
      "Services Lighting / Ceiling Design",
      "Consultation Material",
      "Finish Selections Space",
      "Planning Sustainable Design",
      "Theme & Concept Development",
      "Custom Cabinetry Design",
      "Adaptive Re-use",
    ],
  },
  {
    title: "FURNITURE MANUFACTURING",
    items: [
      "Custom Furniture Design",
      "Textile Technology",
      "Furniture Selection",
      "Wall Panelling Design",
      "Mirror Design ",
      "Custom Cabinetry Manufacturing",
      "Custom Outdoor Furniture",
      "Custom Baby & Child",
      "Furniture Plans & Detailed Specifications",
      "DevelopmentFF&E Inventories",
      "Re-Use AnalysisFF&E",
    ],
  },
  {
    title: "CLIENT  VISUALIZATION",
    items: [
      "Animations & Renderings",
      "3D Architectural Modeling",
      "Photo-Real / Non-Photo-Real Renderings",
      "3D Animations",
      "360 Degree VR Tours",
      "Coordination Design",
      "Analysis Material & Finish",
      "Mood Boards",
    ],
  },
];
const ServiceRow = ({
  title,
  imgUrl,
  imgPlaceholderUrl,
  imgDescription,
  items,
}: ServiceRowProps) => {
  return (
    <div className={`${namespace}-row`}>
      <h2>{title}</h2>
      <div className={`${namespace}-row-container`}>
        <div className={`${namespace}-row-img`}>
          <img src={imgUrl} alt={imgDescription} />
        </div>
        <div className={`${namespace}-row-items-container`}>
          <ul className={`${namespace}-row-items`}>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
const ServicesPage = () => {
  return (
    <div className={namespace}>
      <PageTitle text={"Services".toUpperCase()} />
      <div className={`${namespace}-rows`}>
        {servicesData.map((service) => (
          <ServiceRow
            items={service.items}
            title={service.title}
            key={service.title}
          />
        ))}
      </div>
    </div>
  );
};
export default ServicesPage;
