import {
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="relative inset-0">
      <div className=" font-sans flex justify-center">
        <div className="flex justify-between gap-x-10 py-4 md:gap-x-20">
          <a
            href="#"
            className="md:cursor-pointer"
            aria-label="Facebook ikon"
          >
            <FontAwesomeIcon icon={faLinkedin} size="xl" />
          </a>
          <a
            href="#"
            className="md:cursor-pointer"
            aria-label="Instagram ikon"
          >
            <FontAwesomeIcon icon={faInstagram} size="xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
