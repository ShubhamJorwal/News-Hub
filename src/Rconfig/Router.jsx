import { createBrowserRouter } from "react-router-dom";
import Notfoundpage from "../pages/notfound/404Notfound";
import Home from "../pages/home/Home";
import News from "../pages/News";
import Layout from "../layout/Layout";
import About from "../pages/extrapages/About";
import Contact from "../pages/extrapages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Notfoundpage />,
  },
  {
    path: "/general",
    element: <Layout><News pagesize="8" country="us" category="General" /></Layout>,
  },
  {
    path: "/business",
    element:  <Layout><News pagesize="8" country="us" category="Business" /></Layout>,
  },
  {
    path: "/entertainment",
    element:  <Layout><News pagesize="8" country="us" category="Entertainment" /></Layout>,
  },
  {
    path: "/health",
    element:  <Layout><News pagesize="8" country="us" category="Health" /></Layout>,
  },
  {
    path: "/science",
    element:  <Layout><News pagesize="8" country="us" category="Science" /></Layout>,
  },
  {
    path: "/sports",
    element:  <Layout><News pagesize="8" country="us" category="Sports" /></Layout>,
  },
  {
    path: "/technology",
    element:  <Layout><News pagesize="8" country="us" category="Technology" /></Layout>,
  },
  {
    path: "/about",
    element:  <Layout><About/></Layout>,
  },
  {
    path: "/contact-us",
    element:  <Layout><Contact/></Layout>,
  },
]);

export default router;
