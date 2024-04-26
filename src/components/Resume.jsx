import React from "react";

const resumeContent = [
  {
    year: "2000 - 2006",
    delayAnimation: "",
    infoContent: [
      {
        title: "τμήμα Φυσικοθεραπείας",
        subTitle: "Διεθνές Πανεπιστήμιο Ελλάδος",
      },
      {
        title: "εθελοντική εργασία",
        subTitle: "φιλοζωικές οργανώσεις",
      },
      {
        title: "πρακτική άσκηση",
        subTitle: "κλινική Mühlengrund, Reinhardshausen, Γερμανία",
      },      
    ],
  },
  {
    year: "2007 - 2019",
    delayAnimation: "",
    infoContent: [
      {
        title: "πλήρης εργασία",
        subTitle: "κτηνιατρικό κέντρο Fachtierarzt Leonding, Αυστρία",
      },
      {
        title: "Canine Rehabilitation",
        subTitle: "University of Tennessee, USA",
      },
      {
        title: "πιστοποίηση CCRP",
        subTitle: "University of Tennessee, USA",
      },
      {
        title: "παροχή φυσικοθεραπειών",
        subTitle: "σε κτηνιατρικό κέντρο, Θεσσαλονίκη",
      },
    ],
  },
  {
    year: "2019 - Σημερα",
    delayAnimation: "",
    infoContent: [
      {
        title: "παραδοσιακός και βιοϊατρικός βελονισμός",
        subTitle: "ΕΦΕΑ & ΠΑΔΑ",
      },
      {
        title: "δημιουργία ιδιωτικού χώρου",
        subTitle: "αποκλειστικά για φυσικοθεραπεία",
      },
      {
        title: "παροχή υδροθεραπειών",
        subTitle: "σε συνεργασία με Cane Sentio",
      },
      {
        title: "δημιουργία του project",
        subTitle: "The Truth about Dogs",
      },
    ],
  },
];

const Resume = () => {
  return (
    <>
      {resumeContent.map((item, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            {/* <!--Timeline--> */}
            <div className="ptf-timeline">
              <div className="ptf-timeline__year">{item.year}</div>
              <ul className="ptf-timeline__list">
                {item.infoContent.map((val, i) => (
                  <li className="ptf-timeline__item" key={i}>
                    <h4 className="ptf-timeline__title">{val.title}</h4>
                    <p className="ptf-timeline__description">{val.subTitle}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Resume;
