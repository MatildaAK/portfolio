const Experience = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-center md:gap-10">
        <div className="flex justify-center">
          <div className="border-2 border-black solid w-2/3 rounded-lg dark:border-white md:w-full md:mt-10">
            <p className="text-center mt-2">Backend Development</p>
            <div className="m-2 text-center">
              <ul className="grid grid-cols-3 gap-4 uppercase">
                <li>
                  <p>PHP</p>
                </li>
                <li>
                  <p>JAVA</p>
                </li>
                <li>
                  <p>
                    GIT <span></span>
                  </p>
                </li>
                <li>
                  <p>
                    JavaScript <span></span>
                  </p>
                </li>
                <li>
                  <p>
                    MySQL <span></span>
                  </p>
                </li>
                <li>
                  <p>
                    NoSQL <span></span>
                  </p>
                </li>
                <li>
                  <p>
                    TypeScript <span></span>
                  </p>
                </li>
                <li>
                  <p>
                    API <span></span>
                  </p>
                </li>

              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="border-2 border-black solid rounded-lg w-2/3 dark:border-white md:w-full">
            <p className="text-center mt-2">Frontend Development</p>
            <div className="m-2 text-center">
              <ul className="grid grid-cols-3 gap-4 uppercase">
              <li>
                  <p>
                    tailwind
                  </p>
                </li>
                <li>
                  <p>
                    html5
                  </p>
                </li>
                <li>
                  <p>
                    css
                  </p>
                </li>
                <li>
                  <p>
                    TypeScript
                  </p>
                </li>
                <li>
                  <p>
                    scss
                  </p>
                </li>
                <li>
                  <p>
                    react
                  </p>
                </li>
                <li>
                  <p>
                    JavaScript
                  </p>
                </li>
                <li>
                  <p>
                    NodeJS
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
