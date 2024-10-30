import Image from "next/image";
// import Footer from "@/components/home-page/home-6/FooterMenu";
import Header from "@/components/home-page/home-6/Header";
import Block2 from "@/components/services/Block2";
import Faq4 from "@/components/faqs/Faq4";
// import Testimonial from "@/components/services/Testimonial";
import CallToActions from "@/components/services/CallToActions";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";

const ServiceV4 = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Inner Banner */}
      {/* <div className="inner-banner-three text-center p-30">
        <div
          className="bg-wrapper text-center"
          style={{ backgroundImage: "url(/images/assets/bg-17.svg)" }}
        >
          <div className="container">
            <div className="title-style-five">
              <h2 className="main-title tx-dark fw-bold">Our Services</h2>
            </div>
            <p className="fs-20 mt-30 lg-mt-20">
              KOgenie offers top-tier solutions in e-commerce integration, product management, and digital marketing.
            </p>
          </div>
        </div>
      </div> */}

      {/* Feature Section One */}
      <div className="fancy-feature-one pt-120 lg-pt-90">
        <div className="container">
        
          <h2
            style={{
              fontSize: "5rem",
              justifyContent: "center",
              textAlign: "center",
              marginBottom: "2rem",
            }}
            className="main-title font-recoleta fw-normal tx-dark"
          >
            Our Services
          </h2>
          <div className="row align-items-center">
            <div className="col-lg-6 aos fadeInLeft">
              <div className="title-style-one text-center text-lg-start">
                <h2 className="main-title fw-bold tx-dark m0">
                  Delivering <span>Innovative</span> Solutions.
                </h2>
              </div>
            </div>
            <div className="col-lg-5 ms-auto aos fadeInRight">
              <p className="text-lg text-center text-lg-start md-pt-30 m0">
                At KOgenie, we help businesses grow by providing cutting-edge
                solutions in product catalog management, digital marketing, and
                data analytics.
              </p>
            </div>
          </div>
        </div>
        <div className="container pt-120 lg-pt-80 md-pt-60">
          <div className="row gx-xxl-5">
            <Block2 />
          </div>
        </div>
      </div>

      {/* Feature Section Fifty Four */}
      <div className="fancy-feature-fiftyFour p-30 mt-50 lg-mt-40">
        <div className="bg-wrapper position-relative zn2 pt-110 lg-pt-80 pb-110 lg-pb-80">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" data-aos="fade-right">
                <div className="title-style-one">
                  <div
                    style={{
                      fontSize: "50px",
                      fontWeight: "bolder",
                      color: "black",
                    }}
                    className="sc-title text-uppercase"
                  >
                    Why KOgenie?
                  </div>
                  <h2 className="main-title fw-bold tx-dark">
                    Why <span>Choose</span> KOgenie.
                  </h2>
                </div>
                <p className="text-lg mt-40 lg-mt-20">
                  We empower businesses by offering tailored e-commerce and
                  digital marketing solutions to meet their unique needs.
                </p>
                <Image
                  src="/images/shape/shape_179.svg"
                  alt="shape"
                  width={90}
                  height={30}
                  className="lazy-img d-none d-lg-block mt-40"
                />
              </div>

              <div className="col-lg-7 ms-auto" data-aos="fade-left">
                <div className="bg-white pe-3 ps-3 pe-lg-5 ps-lg-5 pt-15 pb-15 ms-xxl-4 rounded-3 md-mt-40">
                  <Faq4 />
                </div>
              </div>
            </div>
          </div>

          <Image
            width={8}
            height={8}
            src="/images/shape/shape_11.svg"
            alt="shape"
            className="lazy-img shapes shape-one"
          />
          <Image
            width={18}
            height={16}
            src="/images/shape/shape_13.svg"
            alt="shape"
            className="lazy-img shapes shape-two"
          />
          <Image
            width={8}
            height={8}
            src="/images/shape/shape_10.svg"
            alt="shape"
            className="lazy-img shapes shape-three"
          />
          <Image
            width={10}
            height={10}
            src="/images/shape/shape_12.svg"
            alt="shape"
            className="lazy-img shapes shape-four"
          />
        </div>
      </div>

      {/* Feedback Section */}
      {/* <div
        className="feedback-section-one zn2 position-relative"
        data-aos="fade-up"
      >
        <div className="bg-white zn2 position-relative pt-150 lg-pt-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 m-auto">
                <div className="title-style-one text-center">
                  <h2 className="main-title fw-bold tx-dark m0">
                    What <span>Our Clients</span> Say About KOgenie.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <Testimonial />
        </div>
      </div>

      {/* Wrapper */}
      {/* <div className="wrapper position-relative mt-160 lg-mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-10 m-auto text-center">
              <div className="title-style-one" data-aos="fade-up">
                <h2 className="main-title fw-bold tx-dark m0">
                  Ready to get started? It’s just a matter of{" "}
                  <span>one click</span>.
                </h2>
              </div>
            </div>
          </div>
        </div>

        <Image
          width={8}
          height={8}
          src="/images/shape/shape_20.svg"
          alt="shape"
          className="lazy-img shapes shape-one"
          style={{ top: "5%", left: "10%" }}
        />
        <Image
          width={11}
          height={11}
          src="/images/shape/shape_21.svg"
          alt="shape"
          className="lazy-img shapes shape-two"
          style={{ bottom: "-4%", left: "18%" }}
        />
        <Image
          width={9}
          height={9}
          src="/images/shape/shape_22.svg"
          alt="shape"
          className="lazy-img shapes shape-three"
          style={{ bottom: "-4%", right: "23%" }}
        />
        <Image
          width={16}
          height={14}
          src="/images/shape/shape_23.svg"
          alt="shape"
          className="lazy-img shapes shape-four"
          style={{ top: "-3%", right: "14%" }}
        /> */}
      {/* </div> */} 

      {/* Call To Actions */}

      <CallToActions />



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

export default ServiceV4;
