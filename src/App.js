import React, { useEffect } from "react";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "photoswipe/dist/photoswipe.css";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Φυσικοθεραπεία σε κατοικίδια - Στέλλα Κεχαγιά</title>
        <meta name="description" content="Φυσιοθεραπεία για σκύλους και γάτες, ενδυνάμωση και μεταχειρουργική αποκατάσταση" />
        <meta
          name="keywords"
          content="φυσικοθεραπεία, φυσιοθεραπεία, κατοικίδια, ζώα, σκύλος, γάτα, δυσπλασία, αρθρίτιδα, ορθοπεδικά"
        />
      </Helmet>
      {/* End React Helmet for SEO */}

      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color="0, 153, 144"
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      {/* End Animated Cursor */}

      <ScrollToTop />
      {/* End Scroll To Top */}

      <AllRoutes />
      {/* End All Routes */}
    </>
  );
};

export default App;
