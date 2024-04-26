import React from "react";

const PersonalInfo = () => {
  return (
    <>
      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="100">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">
          Βιογραφικο
        </h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "2.8125rem" }}></div>
        <p
          className="fz-24 has-black-color has-secondary-font"
          style={{ maxWidth: "15.3125rem" }}
        >
          Γεια σας, είμαι η Στέλλα, γνωστή και ως η "Φυσικοθεραπεύτρια των κατοικιδίων"!
        </p>
      </div>
      {/* End .ptf-animated-block */}

      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{
          "--ptf-xxl": "5.625rem",
          "--ptf-md": "2.8125rem",
        }}
      ></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="200">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Επικοινωνια</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "2.8125rem" }}></div>
        <p className="fz-24 has-black-color has-secondary-font">
          Θεσσαλονίκη, Ελλάδα <br />
          <a href="mailto:hello@brunoerdison.com">info@dogphysio.gr</a>
          <br />
          <a href="tel:+6835688986">+30 6938 198989</a>
        </p>
      </div>
      {/* End .ptf-animated-block */}

      {/* <!--Spacer--> */}
      <div
        className="ptf-spacer"
        style={{
          "--ptf-xxl": "5.625rem",
          "--ptf-md": "2.8125rem",
        }}
      ></div>

      {/* <!--Animated Block--> */}
      <div className="ptf-animated-block" data-aos="fade" data-aos-delay="300">
        <h5 className="fz-14 text-uppercase has-3-color fw-normal">Υπηρεσιες</h5>
        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "2.8125rem" }}></div>
        <p className="fz-24 has-black-color has-secondary-font">
          Φυσικοθεραπεία <br />
          Υδροθεραπεία
          <br />
          Βελονισμός
        </p>
      </div>
      {/* End .ptf-animated-block */}
    </>
  );
};

export default PersonalInfo;
