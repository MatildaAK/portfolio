import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImg from "../../assets/profilbild.png";

const Intro = () => {
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center md:mr-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 overflow-hidden">
            <img
              src={profileImg}
              alt="Profile pic"
              className="h-52 mt-8 md:h-80 md:mt-10 md:px-16"
            />
          </div>
          <div className="flex justify-center items-center mt-6">
            <div className="text-center">
              <p className="font-semibold">Hello, I'm</p>
              <h2 className="text-3xl font-bold my-3">Matilda Källström</h2>
              <h3 className="text-xl font-semibold">Fullstack webdeveloper</h3>
              <div className="flex justify-center gap-x-4 py-4">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
