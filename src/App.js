// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './dashboardComponents/ScrollToTop';

import { BaseOptionChartStyle } from './dashboardComponents/chart/BaseOptionChart';

// ----------------------------------------------------------------------



import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/icofont/icofont.min.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/owl.carousel/assets/owl.carousel.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/venobox/venobox.css';
import './assets/vendor/aos/aos.css';
import './assets/css/style.css';
import './assets/css/bootstrap-datepicker.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// ----------------------------------------------------------------------


export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <BaseOptionChartStyle />
      <Router />
    </ThemeProvider>
  );
}
