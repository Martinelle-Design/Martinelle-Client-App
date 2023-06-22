import { LazyLoadImage } from "react-lazy-load-image-component";
import PageTitle from "../utilities/pageTitle/PageTitle";
import seperateToWords from "../utilities/helpers/seperateToWords";
import { ServiceItem } from "../utilities/types/types";
import useClientAppItems from "../hooks/use-client-app-items";
const namespace = "services-pg";
type ServiceRowProps = {
  title: string;
  imgUrl?: string;
  imgPlaceholderUrl?: string;
  imgDescription?: string;
  items: string[];
};
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
          <LazyLoadImage
            src={imgUrl}
            alt={imgDescription}
            placeholderSrc={imgPlaceholderUrl}
            effect="blur"
          />
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
  const { status, items } = useClientAppItems<ServiceItem>({
    itemType: "servicesPage",
  });
  return (
    <div className={namespace}>
      <PageTitle text={"Services".toUpperCase()} />
      <div className={`${namespace}-rows`}>
        {items.map((service) => {
          const { id, images, subCategories, title } = service;
          const imgEntries = images ? Object.entries(images) : [];
          const imgOrder = imgEntries.sort((a, b) =>
            a[1].orderIdx > b[1].orderIdx ? 1 : -1
          );
          const newTitle = seperateToWords(title).toUpperCase();
          return (
            <ServiceRow
              items={subCategories}
              title={newTitle}
              key={id}
              imgUrl={imgOrder?.[0]?.[1].imgUrl}
              imgDescription={imgOrder?.[0]?.[1].description}
              imgPlaceholderUrl={imgOrder?.[0]?.[1].placeholderUrl}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ServicesPage;
