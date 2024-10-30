// import DefaultFooter from "@/components/footer/DefaultFooter";
// import Partners from "@/components/services/Partners";
// import Faq from "@/components/services/Faq";
import Testimonial from "@/components/home-page/home-3/Testimonial";
import Block from "@/components/services/Block";
import Team1 from "@/components/team/Team1";
import Link from "next/link";
import VideoBlock from "@/components/about/VideoBlock";
// import Counter from "@/components/about/Counter";
import Header from "@/components/home-page/home-6/Header";
import Image from "next/image";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
const AboutUsV1 = () => {
  const features = [
    { text: "Driver by data." },
    { text: "Innovating AI solutions" },
    { text: "24/7 customer support." },
  ];

  const starRating = Array(5)
    .fill()
    .map((_, index) => (
      <li key={index}>
        <i className="fa-solid fa-star" />
      </li>
    ));

  return (
    <>
      {/* Header */}
      <Header />

      {/* Feature Section Fifty One */}
      <div className="fancy-feature-fiftyOne position-relative mt-200">
        <div className="container">
          <div className="row">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="title-style-five mb-65 md-mb-40">
                <h2
                  style={{ justifyContent: "center", textAlign: "center" }}
                  className="main-title fw-500 tx-dark font-recoleta"
                >
                  Leading in E-commerce and Digital Solutions.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-8 col-lg-9 ms-auto">
              <div className="ps-xxl-5" data-aos="fade-left">
                <h6 className="mb-30">Our Journey &amp; Vision</h6>
                <p className="text-lg tx-dark">
                  KOgenie was founded to simplify e-commerce and digital
                  marketing for businesses. With our platform, we offer seamless
                  integrations, advanced product catalog management, and
                  powerful digital marketing solutions. Our mission is to help
                  businesses thrive in the competitive digital landscape.
                </p>
                <div className="row">{/* <Counter /> */}</div>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/shape/shape_171.svg"
          alt="shape"
          width={100}
          height={100}
          className="lazy-img shapes shape-one"
        />
        <Image
          src="/images/shape/shape_172.svg"
          alt="shape"
          width={100}
          height={100}
          className="lazy-img shapes shape-two"
        />
      </div>

      {/* Video Block Section */}
      <VideoBlock />

      {/* Feature Section Thirty Seven */}
      <div className="fancy-feature-thirtySeven mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="block-style-four pe-xxl-5 me-xxl-4 md-mb-70"
                data-aos="fade-right"
              >
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">
                    WHY KOgenie?
                  </div>
                  <h2 className="main-title fw-500 tx-dark">
                    Empowering brands to hyper-targeted influence
                  </h2>
                </div>
                <p className="fs-20 pt-20 pb-30 lg-pt-10 lg-pb-20">
                  KOgenie offers a complete suite of services from e-commerce
                  integration to digital marketing strategies designed to boost
                  your online sales and brand visibility.
                </p>
                <ul className="style-none list-item">
                  {features.map((feature, index) => (
                    <li key={index}>{feature.text}</li>
                  ))}
                </ul>
                <div className="d-inline-flex align-items-center mt-35 lg-mt-20">
                  {/* <ul className="d-flex style-none rating">{starRating}</ul> */}
                  <div className="fs-20 ms-2">
                    {/* <strong className="fw-500 tx-dark">4.9</strong> */}
                    {/* <span className="tx-dark fs-16 opacity-50">
                      (15k Reviews)
                    </span> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xxl-5 col-lg-6 ms-auto">
              <Block />
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section-two position-relative pt-200 lg-pt-120">
        <div className="container">
          <div className="wrapper position-relative">
            <div className="row align-items-center">
              <div className="col-lg-5" data-aos="fade-right">
                <div className="title-style-six text-center text-lg-start pb-40 lg-pb-20 md-pb-10">
                  <h2 className="main-title fw-500 tx-dark">Meet Our Team</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <Team1 />
            </div>
            {/* <p
              className="cr-text text-center text-lg tx-dark mt-75 lg-mt-50"
              data-aos="fade-up"
            >
              Our
              <span className="text-decoration-underline fw-500">2,500+</span>
              dedicated professionals are here to help your business succeed.
            </p> */}
            <div className="text-center md-mt-20">
              <Link
                href="/pages-menu/team-v1"
                className="btn-twentyTwo fw-500 tran3s"
                data-aos="fade-left"
              >
                View Full Team
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/images/shape/shape_172.svg"
          alt="shape"
          width={100}
          height={100}
          className="lazy-img shapes shape-one d-none d-xl-inline-block"
        />
      </div>

      {/* Client Feedback Section */}
      <div
        className="feedback-section-eleven position-relative mt-50 pt-100 pb-70 lg-pt-70 lg-pb-50"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="title-style-one text-center mb-50 lg-mb-20">
            <h2 style={{
              fontSize:'50px',
            }}className="main-title fw-500 tx-dark m0 font-recoleta">Client Feedback</h2>
          </div>
        </div>
        <div className="inner-content">
          <div className="slider-wrapper">
            <div className="feedback_slider_seven">
              <Testimonial />
            </div>
          </div>
        </div>
      </div>

      {/* Digital Solutions Section */}
      {/* <div className="fancy-feature-thirtyEight mt-180 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="block-style-seven" data-aos="fade-right">
                <div className="title-style-six">
                  <div className="sc-title-two text-uppercase">SOLUTION</div>
                  <h2 className="main-title fw-500 tx-dark">
                    Digital Solutions for Businesses
                  </h2>
                </div>
                <p className="fs-20 pt-10 pb-30 lg-pb-20">
                  Want to know more about KOgenie’s solutions? Contact us for
                  more information.
                </p>
                <div className="btn-eighteen position-relative d-inline-block tx-dark">
                  <Link href="/page-menu/about-us-v1" className="fw-500 tran3s">
                    More About Solutions
                    <i className="fa-solid fa-angle-right" />
                  </Link>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-6 ms-auto" data-aos="fade-left">
              <Faq />
            </div> */}
          {/* </div>
        </div> */}

        {/* <div className="partner-section-six position-relative mt-130 lg-mt-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <h3 className="title tx-dark text-center text-lg-start md-pb-10 m0">
                  <span>200+</span> Trusted Partners
                </h3>
              </div>
              {/* <div className="col-xl-6 col-lg-7 ms-auto">
                <div className="logo-wrapper text-center d-flex justify-content-center justify-content-lg-between flex-wrap">
                  <Partners />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      {/* Short Banner Section */}
      {/* <div
        className="fancy-short-banner-sixteen mt-130 lg-mt-80"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="bg-wrapper pt-65 pb-65 lg-pt-40 lg-pb-40">
            <div className="row">
              <div className="col-xl-10 col-md-11 m-auto">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="text-wrapper text-center text-lg-start md-pb-30">
                      <div className="sc-title fs-18 pb-10">
                        Have Any Project?
                      </div>
                      <h2 className="main-title fw-500 text-white m0">
                        Contact us.
                      </h2>
                    </div>
                  </div>

                  <div className="col-lg-5 ms-auto text-center text-lg-end">
                    <Link
                      href="/contact"
                      className="btn-twentyOne fw-500 tran3s"
                    >
                      Get Started Today!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Footer */}
       {/* Footer */}
       <div className="footer-style-two theme-basic-footer">
        <div className="top-footer position-relative">
          <div className="container">
            <div className="inner-wrapper m-auto">
              <div className="row">
                <FooterMenu />
              </div>
            </div>
          </div>
        </div>
        <CopyrightFooter2 />
      </div>
    </>
  );
};

export default AboutUsV1;
