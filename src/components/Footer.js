import SocialIcon from "./SocialIcon";
import {BasicInfoShema} from "../data/BasicInfoShema";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-capitalize">
        <SocialIcon socialInfo={BasicInfoShema.socialMedia}/>
        copyright &copy; {year}
      </footer>
    </>
  );
};

export default Footer;
