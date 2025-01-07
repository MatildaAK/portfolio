import {
  faLinkedin,
  faSquareGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="relative inset-0">
      <div className=" font-sans flex justify-center">
        <div className="flex justify-between gap-x-10 py-4 md:gap-x-20">
          <a
            href="https://linkedin.com/in/matilda-agerstig-källström"
            className="md:cursor-pointer text-blue-600 dark:text-sky-700"
            aria-label="LinkedIn ikon"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </a>
          <a
            href="https://github.com/MatildaAK"
            className="md:cursor-pointer text-blue-600 dark:text-sky-700"
            aria-label="Github ikon"
          >
            <FontAwesomeIcon icon={faSquareGithub} size="2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
