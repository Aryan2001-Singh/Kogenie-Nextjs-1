import Image from "next/image";

const tabData = [
  {
    id: "sp1",
    title: "Input Audience Data",
    subtitle: "Select your target audience",
    image: "/images/media/img_06.jpg",
    width: 1200,  // Set appropriate width for the image
    height: 800,  // Set appropriate height for the image
  },
  {
    id: "sp2",
    title: "Review and Refine",
    subtitle: "A/B Testing optimizes for best possible outcomes",
    image: "/images/media/img_05.jpg",
    width: 1200,  // Set appropriate width for the image
    height: 800,  // Set appropriate height for the image
  },
  {
    id: "sp3",
    title: "Deploy and Monitor",
    subtitle: "Get analysis of insight in realtime",
    image: "/images/media/img_06.1.jpg",
    width: 1200,  // Set appropriate width for the image
    height: 800,  // Set appropriate height for the image
  },
];

const ProductTabs = () => {
  return (
    <>
      <ul
        className="nav nav-tabs d-block d-md-flex justify-content-between"
        data-aos="fade-up"
        role="tablist"
      >
        {tabData.map((tab) => (
          <li className="nav-item" role="presentation" key={tab.id}>
            <button
              className={`nav-link ${tab.id === "sp1" ? "active" : ""}`}
              data-bs-toggle="tab"
              data-bs-target={`#${tab.id}`}
              type="button"
              role="tab"
            >
              {tab.title}
              <span className="d-none d-lg-inline-block">{tab.subtitle}</span>
            </button>
          </li>
        ))}
      </ul>
      <div
        className="tab-content position-relative mt-120 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
        <Image
          src="/images/shape/shape_33.svg"
          alt="media"
          className="lazy-img shapes shape-three"
          width={50}
          height={50}
        />
        <Image
          src="/images/shape/shape_34.svg"
          alt="media"
          className="lazy-img shapes shape-four"
          width={50}
          height={50}
        />
        {tabData.map((tab) => (
          <div
            className={`tab-pane ${tab.id === "sp1" ? "active show" : ""}`}
            id={tab.id}
            key={tab.id}
          >
            <Image
              src={tab.image}
              alt="media"
              className="lazy-img main-screen w-100"
              width={tab.width}   // Set width for each image
              height={tab.height}  // Set height for each image
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductTabs;