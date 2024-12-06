import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import profilImage from "../assets/girl-6028307_1280.png" ;

const Home = () => {
  return (
    <section className="py-14 mt-5 font-pageFont">
      <div className="max-w-[500px] h-[80vh] mx-auto px-4 md:px-8">
        <div className="max-w-lg  border-2 rounded-xl border-orange-200 mx-auto p-5 shadow-xl ">
          <div>
            <div className="flex flex-col justify-evenly gap-6 items-center gap-x-4 mt-6">
              <img
               src={profilImage} alt="profilImage"
                className="w-[50%] h-auto rounded-full"
              />
              <div>
                <span className="text-2xl block text-gray-800  uppercase font-[900]">
                  welcome my blog
                </span>
              </div>
              
            </div>
            <div className="flex text-4xl justify-center gap-5 mt-5 text-[#9a4286]">
              <Link
                to="https://www.linkedin.com/in/busrakocarslan/"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <Link to="https://github.com/busrakocarslan" target="_blank">
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-form-bg bg-cover w-[250px] h-[250px] m-auto mt-5"></div>
      </div>
    </section>
  );
};

export default Home;
