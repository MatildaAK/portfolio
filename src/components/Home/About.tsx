import profileImg from "../../assets/profilbild.png";

const About = () => {
  return (
    <>
      <div className="my-20">
        <div className="text-center md:mb-16">
          <p className="capitalize">find out more</p>
          <h3 className="text-2xl font-bold">About Me</h3>
        </div>
        <div>
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-center my-10 md:w-1/3">
              <img src={profileImg} alt="" className="h-40" />
            </div> 
            <div className="md:w-2/3">
            <div className="flex flex-wrap justify-center gap-6 mb-10">

                <div className="border border-2 border-black dark:border-white solid rounded-lg w-1/3 py-2 text-center">
                  <p className="font-semibold text-lg">Experience</p>
                  <p>Grocery store</p>
                  <p>11 years of employee</p>
                </div>
                <div className="border border-2 border-black dark:border-white solid rounded-lg w-1/3 py-2 text-center">
                  <p className="font-semibold text-lg">Experience</p>
                  <p>Academic Work</p>
                  <p>Junior developer</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                <div className="border border-2 border-black dark:border-white solid rounded-lg w-1/3 py-2 text-center">
                  <p className="font-semibold text-lg">Education</p>
                  <p>Chas Academy</p>
                  <p>Fullstack Webdeveloper Open Source</p>
                </div>
                <div className="border border-2 border-black dark:border-white solid rounded-lg w-1/3 py-2 text-center">
                  <p className="font-semibold text-lg">Education</p>
                  <p>Chas Academy</p>
                  <p>IT security for developers</p>
                  <p>Chas Upskill</p>
                </div>
                <div className="border border-2 border-black dark:border-white solid rounded-lg w-1/3 py-2 text-center">
                  <p className="font-semibold text-lg">Education</p>
                  <p>Brights</p>
                  <p>JAVA developer</p>
                </div>
              </div>
              
              <div className="flex justify-center mt-6">
                <div className="w-[75%]">
                  <p>
                    Driven by a commitment to lifelong learning and
                    self-improvement, I continually aim to surpass my previous
                    achievements, embracing the philosophy that there are no
                    limits to what can be accomplished.
                  </p>
                  <p className="mt-6">
                    Outside of that, I value spending time with family and
                    friends. I enjoy reading books and playing disc golf, and I
                    have recently started learning to crochet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
