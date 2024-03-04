import Footer from "../components/Footer.js";
import Navigationbar from "../components/Navigationbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navigationbar/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
