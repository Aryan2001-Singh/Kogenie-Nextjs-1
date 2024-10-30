import React from "react";

import Header from "@/components/home-page/home-6/Header";
import Hero from "@/components/home-page/home-6/Hero";
import ScreenHolder from "@/components/home-page/home-6/ScreenHolder";
import Link from "next/link";
import ProductTabs from "@/components/home-page/home-6/ProductTabs";
import TagList from "@/components/home-page/home-6/TagList";
import Features from "@/components/home-page/home-6/Features";
import Testimonial from "@/components/home-page/home-6/Testimonial";
import CircleBgShape from "@/components/home-page/home-6/CircleBgShape";

// import Pricing from "@/components/home-page/home-6/Pricing";

import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";
import Image from "next/image";

const SassProduct = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Feature Section Three */}
      <div className="fancy-feature-three pt-300 lg-pt-200 md-pt-170 sm-pt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6">
              <div
                className="block-style-two pe-xxl-5 md-mb-50"
                data-aos="fade-right"
              >
                <div className="title-style-three">
                  <div className="sc-title text-uppercase">
                    Integrates your tools
                  </div>
                  <h2
                    style={{ fontSize: "1 rem" }}
                    className="main-title fw-200"
                  >
                    Kogenie leads in hyper-targeted influence
                  </h2>
                </div>
                <p className="text-lg mt-25 mb-60 lg-mb-40">
                  At Kogenie we leverage the power of generative AI, granular
                  data, and Automated A/B testing to deliver advertisement that
                  connect on a deep, instinctive level with your audience.
                  Whether you aim to drive to aim action or influence emotions,
                  we have the expertise and tools to make it happen.
                </p>
                <Link
                style={{bottom:'190px'}}
                  href="/pages-menu/about-us-v1"
                  className="btn-four fw-500"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-7 col-md-6 ms-auto"
              data-aos="fade-left"
            >
              <ScreenHolder />
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section Four */}
      <div className="fancy-feature-four pt-250 lg-pt-120">
        <div className="container">
          <div className="row">
            <div
              className="col-xxl-7 col-md-8 m-auto text-center"
              data-aos="fade-up"
            >
              <div className="title-style-three">
                <h2 className="main-title fw-500">How to Generate Ads?</h2>
              </div>
              <p className="text-lg mt-40 mb-100 lg-mt-20 lg-mb-50">
                {/* We help you bring all your team management and tasks into one
                simple platform. */}
              </p>
            </div>
          </div>
          <ProductTabs />
        </div>
      </div>

      {/* Feature Section Five */}
      <div className="fancy-feature-five pt-300 lg-pt-140">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-6 order-md-last ms-auto">
              <div
                className="block-style-two pe-xxl-5 sm-mb-50"
                data-aos="fade-left"
              >
                <div className="title-style-three">
                  <div className="sc-title text-uppercase">
                    Personalization of granular data
                  </div>
                  <h2
                    style={{ fontSize: "1 rem" }}
                    className="main-title fw-200"
                  >
                    Unleashing the power of Generative AI to High Quality
                  </h2>
                </div>
                <p className="text-lg mt-25 mb-60 lg-mb-40">
                  Our Generative AI and Granular Data works hand in hand to
                  create personalized, high impact advertisement that drives
                  research.
                </p>
                <Link  style = {{
                  bottom:'185px'
                }}href="/sign-up" className="btn-four fw-500">
                  Try Free Now
                </Link>
              </div>
            </div>
            <div className="col-md-6 order-md-first" data-aos="fade-right">
              <div className="tags-wrapper position-relative">
                <TagList />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section Six */}
      <div style={{bottom:'380px'}} className="fancy-feature-six position-relative mt-225 lg-mt-100 xs-mt-80">
        <div className="container">
          <div className="row gx-xxl-5 align-items-center">
            <div className="col-lg-4 col-md-6 mt-40" data-aos="fade-up">
              <div className="title-style-three mb-65 lg-mb-40">
                <h2 className="main-title fw-500">
                  Let’s Discover our all features
                </h2>
              </div>
            </div>
            <Features />
          </div>
        </div>
      </div>

      {/* Feedback Section */}
      <div  style = {{bottom:'350px'}}className="feedback-section-two position-relative mt-170 pt-150 pb-150 lg-mt-100 lg-pt-100 lg-pb-100 sm-pt-10 sm-pb-10">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-7 col-md-8 col-sm-10 m-auto">
              <div className="title-style-three text-center mb-70 lg-mb-40">
                <div className="icon d-flex align-items-center justify-content-center rounded-circle">
                  <Image
                    src="/images/icon/icon_19.svg"
                    alt="icon"
                    className="lazy-img"
                    width={50} // Add width
                    height={50} // Add height
                  />
                </div>
                <h2 className="main-title fw-500">
                  Check what our clients say about us.
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7 col-lg-9 m-auto">
              <Testimonial />
            </div>
          </div>
        </div>
        <CircleBgShape />
      </div>

      {/* Pricing Section */}
      {/* <div className="pricing-section-one position-relative mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div
                className="title-style-three text-center mb-60 lg-mb-40"
                data-aos="fade-up"
              >
                <div className="sc-title text-uppercase">Pricing Plan</div>
                <h2 className="main-title fw-500">
                  No hidden charges! Choose your plan.
                </h2>
              </div>
            </div>
          </div>
          <Pricing />
        </div>
      </div> */}

      {/* Fancy Short Banner Two */}
      <div
        className="fancy-short-banner-two mt-150 lg-mt-100"
        data-aos="fade-up"
      >
        <div className="container">
          <div style = {{bottom:'300px'}}className="bg-wrapper ms-xxl-4 me-xxl-4 position-relative">
            <div className="inner-wrapper m-auto">
              <div className="row align-items-center">
                <div className="col-md-6 text-center text-md-start sm-mb-30">
                  <h6 className="mb-5">Need a Custom Plan?</h6>
                  <h3 className="fw-normal m0">Send us a message for help.</h3>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <Link href="/contact" className="btn-six fw-500">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer-style-two theme-basic-footer">
        <div style = {{bottom:'200px'}}className="top-footer position-relative">
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

export default SassProduct;
