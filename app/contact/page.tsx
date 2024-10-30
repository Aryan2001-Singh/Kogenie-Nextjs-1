import BlockContact5 from "@/components/contact/BlockContact";
import ContactForm4 from "@/components/contact/ContactForm";
import Map2 from "@/components/contact/Map";
import DefaultFooter from "@/components/footer/DefaultFooter";
import Header from "@/components/home-page/home-6/Header";
import FooterMenu from "@/components/home-page/home-6/FooterMenu";
import CopyrightFooter2 from "@/components/footer/CopyrightFooter2";

const ContactV4 = () => {
  return (
    <>
      {/* <!-- 
      =============================================
      Theme Default Menu
      ============================================== 	
      --> */}
      <Header />
      {/* 
			=============================================
				Contact Section Four
			============================================== 
			*/}
      <div className="contact-section-four pt-180 md-pt-150">
        <div className="container">
          <div className="row">
            <div className="col-xxl-7 col-lg-6 col-md-7 m-auto">
              <div
                className="title-style-fourteen text-center mb-100 lg-mb-50"
                data-aos="fade-up"
              >
                {/* <div
                  style={{
                    color: "#DB4A2B",
                  }}
                  className="sc-title"
                >
                  CONTACT US
                </div> */}
                <h2 className="main-title font-recoleta fw-normal tx-dark">
                  Our team are here to help you.
                </h2>
              </div>
              {/* /.title-style-fourteen */}
            </div>
          </div>
          <div className="row">
            <BlockContact5 />
          </div>
        </div>
        {/* End .container */}

        <div className="contact-meta mt-110 lg-mt-40">
          <div className="row gx-0">
            <div className="col-lg-6 order-lg-last d-flex">
              <div className="form-wrapper pt-60 lg-pt-40 pb-85 lg-pb-50 w-100">
                <div className="form-style-five">
                  <h3 className="form-title font-recoleta fw-normal pb-30 lg-pb-20">
                    Send Message.
                  </h3>
                  <ContactForm4 />
                </div>
                {/* /.form-style-five */}
              </div>
              {/* /.form-wrapper */}
            </div>
            {/* End col-lg-6 */}

            <div className="col-lg-6 order-lg-first d-flex">
              <Map2 />
            </div>
          </div>
        </div>
        {/* /.contact-meta */}
      </div>
      {/* /.contact-section-four */}
      {/* 
        =============================================
        Contact Section One
        ============================================== 
        */}
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

export default ContactV4;
