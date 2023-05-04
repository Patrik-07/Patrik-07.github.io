import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Hero = () => {
  return (
    <>
      <div className="text-center p-4">
        <h1 className="text-5xl py-2 text-teal-800 font-medium">
          Hi! I'm Patrik
        </h1>
        <h1 className="text-2xl py-2">Software developer</h1>
        <p className="text-md py-5 leading-8 max-w-xl mx-auto">
          I'm an enthusiastic, creative, people-oriented early career IT
          student. I would like to use and improve the knowledge I have gained
          from my studies and my own projects on the field of full stack
          software development.
        </p>
      </div>
      <div className="py-5 text-5xl flex justify-center gap-8 text-gray-700">
        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      </div>
    </>
  );
};
