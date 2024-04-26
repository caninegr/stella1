import React from "react";
import Slider from "react-slick";

const testimonialContent = [
  {
    descriptions: ` “Καταπληκτική επαγγελματίας και άνθρωπος! 
    Με οστεαρθρίτιδα και αυχενικό η Μπλερίτσα μας περπατάει ξανά 
    κανονικά και έχει ποιότητα ζωής! Σε ευχαριστούμε πολύ Στέλλα!”`,
    name: "Ράνια Γκαντάλη",
    designation: "Σκύλος: Μπλερ",
  },
  {
    descriptions: ` “Την Στέλλα μας την σύστησε ο κτηνίατρος όταν παρέλυσαν και τα 
    4 ποδαράκια απο το σκυλάκι μας. Απο την πρώτη επαφή κέρδισε την 
    εμπιστοσύνη μας. Με την εμπειρία της, τις γνώσεις της, τον 
    εξοπλισμό της και την αγάπη της για τους μικρούς μας φίλους, 
    κατάφερε να κάνει το Lidaki μας να περπατήσει σε λιγότερο απο 2 μήνες.
    Ευχαριστούμε πάρα πολύ για την πολύτιμη βοήθειά σου!”`,
    name: "Μαρία Ευγενίδου",
    designation: "Σκύλος: Lida",    
  },
  {
    descriptions: ` “Ο Μαξ ήταν από τις πολύ δύσκολες περιπτώσεις αποκαταστασης 
    μετά από σοβαρό χτύπημα από αυτοκίνητο. Η Στέλλα βρεθηκε στο 
    ρομο μας και με πίστη, εμπειρία, επιμονή, γνώσεις και αισιοδοξία, 
    κατάφερε να ανατρέψει τη δύσκολη πρόγνωση και να δούμε τον αγαπημένο μας 
    όρθιο και πάλι!”`,
    name: "Αναστασία Χουρναζίδου",
    designation: "Σκύλος: Μαξ",
  },
];

const TestimonialThree = () => {
  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <>
      <Slider
        {...settings}
        className="arrow-none testimonial-pagination--style-bottom"
      >
        {testimonialContent.map((val, i) => (
          <div
            className="ptf-testimonial ptf-testimonial--style-1 space-80"
            key={i}
          >
            <div className="ptf-testimonial__content">
              <p>{val.descriptions}</p>
            </div>
            <div className="ptf-testimonial__meta">
              <h6 className="ptf-testimonial__author">{val.name}</h6>
              <div className="ptf-testimonial__info">
                <span>{val.designation}</span> {" "}
                <a href={val.webLink} target="_blank" rel="noopener noreferrer">
                  {val.companyName}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default TestimonialThree;
