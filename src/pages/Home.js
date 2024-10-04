/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/logo_01.png";
import videoBg from "../assets/intro.mp4";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import vision from "../assets/vision.png";
import mission from "../assets/mission.png";
import { RevealTag } from "../components/RevealTag";

function Home() {
  const [counter, setCounter] = useState(1);
  const [clients, setClients] = useState(1);
  const [employees, setEmployees] = useState(1);

  const [callCounters, setCallCounters] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      console.log(scrollPosition);
      if (scrollPosition > 362) {
        setCallCounters(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  useEffect(() => {
    let projCounter;
    if (callCounters) {
      projCounter = setTimeout(() => {
        setCounter((prev) => prev + 1);
        if (clients < 6) {
          setClients((prev) => prev + 1);
        }
        if (employees < 10) {
          setEmployees((prev) => prev + 1);
        }
      }, 100); // Call every 100ms

      if (counter === 10) {
        clearTimeout(projCounter); // Stop when the counter reaches 10
      }
    }

    return () => clearTimeout(projCounter);
  }, [callCounters, counter]);

  return (
    <div>
      <div className="sticky">
        <NavBar />
      </div>
      <div className="w-[100%] md:mt-[120px] h-[auto] flex flex-col md:flex-row items-center p-5">
        <div className="md:w-[50%] w-[100%]">
          <video
            autoPlay
            loop
            muted
            className="bg-vid w-[100%] h-[100%] object-cover md:pl-[60px]"
          >
            {" "}
            <source src={videoBg} type="video/mp4" />{" "}
          </video>
        </div>
        <div className="md:w-[50%] w-[100%] text-left">
          <RevealTag className="md:flex-1">
            <div className="font-bold tracking-[10px] md:text-[30px] text-[#DB4646] text-[15px] pb-[10px]">
              B L A C K B U C K ™<br />
              <span className="tracking-[0px] md:text-[20px] text-[10px] font-thin text-gray-300">
                Founded in 2024, our IT startup is dedicated to leveraging
                cutting-edge technology to create innovative solutions that
                address the dynamic challenges faced by businesses today.
                Positioned at the intersection of software development, data
                analytics, and cybersecurity, we aim to empower organizations
                with tools that enhance efficiency, security, and overall
                performance.
              </span>
            </div>
          </RevealTag>
        </div>
      </div>

      <RevealTag styles="w-[100%] mx-auto flex justify-center">
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="border-red-600 border-2 p-[10px] rounded-lg"
        >
          <a href="#about-us">View More</a>
        </motion.a>
      </RevealTag>
      <div id="about-us">
        <div className="w-[100%] h-[auto] mt-[50px] flex flex-col md:flex-row justify-around items-center">
          <RevealTag styles="md:w-[40%] w-[100%] h-[60vh] flex items-center justify-center">
            <img src={logo} alt="main" className="w-full h-full object-cover" />
          </RevealTag>
          <div className="md:w-[60%] w-[100%] p-5 md:p-0 h-[auto] flex md:flex-row flex-col md:items-center md:justify-around">
            <RevealTag>
              <h1 className="text-[80px] font-bold">
                {counter}
                <span className="text-[32px]">+</span>
              </h1>
              <p className="font-bold text-[20px] text-gray-300">Projects</p>
              <p className="text-[13px]">
                Driving success through 10+ innovative projects.
              </p>
            </RevealTag>

            <RevealTag>
              <h1 className="text-[80px] font-bold">
                {clients} <span className="text-[32px] ml-[-20px]">+</span>
              </h1>
              <p className="font-bold text-[20px] text-gray-300">Clients</p>
              <p className="text-[13px]">
                Serving 6+ valued clients with excellence.
              </p>
            </RevealTag>

            <RevealTag>
              <h1 className="text-[80px] font-bold">
                {employees} <span className="text-[32px] ml-[-20px]">+</span>
              </h1>
              <p className="font-bold text-[20px] text-gray-300">Employees</p>
              <p className="text-[13px]">
                Supported by a dynamic team of 10+ skilled employees.
              </p>
            </RevealTag>
          </div>
        </div>

        <div className="vision mt-[20px] flex md:flex-row flex-col items-center justify-around md:p-10 p-5 w-[100%] h-[auto]">
          <div className="md:w-[60%] w-[100%] md:text-left text-center">
            <RevealTag>
              <h2 className="text-[#B63B3B] text-2xl tracking-[20px] font-bold">
                VISION
              </h2>
            </RevealTag>
            <RevealTag>
              <p className="tracking-[0px] md:text-[20px] text-[10px] font-thin text-gray-300">
                Our vision is to revolutionize the way businesses operate by
                seamlessly integrating cutting-edge technology into their core
                processes, driving both growth and sustainability. We aim to
                empower organizations to leverage advanced solutions that
                optimize efficiency, enhance decision-making, and foster
                innovation. By prioritizing sustainability, we are committed to
                creating a future where businesses not only thrive economically
                but also contribute positively to the environment and society.
                Through continuous adaptation and forward-thinking strategies,
                we aspire to be a trusted partner in guiding businesses toward
                long-term success in an ever-evolving digital landscape.
              </p>
            </RevealTag>
          </div>
          <RevealTag styles="md:w-[40%] w-[100%] flex justify-center mt-[10px] md:mt-0">
            <img src={vision} width="70%" height="40%" />
          </RevealTag>
        </div>

        <div className="mission mt-[20px] flex md:flex-row flex-col-reverse items-center justify-around md:p-10 p-5 w-[100%] h-[auto]">
          <RevealTag styles="md:w-[40%] w-[100%] flex justify-center">
            <img src={mission} width="80%" height="80%" />
          </RevealTag>
          <RevealTag styles="md:w-[60%] w-[100%]">
            <h2 className="text-[#B63B3B] md:text-left text-center text-2xl tracking-[20px] font-bold">
              MISSION
            </h2>
            <p className="tracking-[0px] md:text-left text-center md:text-[20px] text-[10px] font-thin text-gray-300">
              Our vision is to revolutionize the way businesses operate by
              seamlessly integrating cutting-edge technology into their core
              processes, driving both growth and sustainability. We aim to
              empower organizations to leverage advanced solutions that optimize
              efficiency, enhance decision-making, and foster innovation. By
              prioritizing sustainability, we are committed to creating a future
              where businesses not only thrive economically but also contribute
              positively to the environment and society. Through continuous
              adaptation and forward-thinking strategies, we aspire to be a
              trusted partner in guiding businesses toward long-term success in
              an ever-evolving digital landscape.
            </p>
          </RevealTag>
        </div>

        {/* <motion.div
          className="md:h-[600px] h-[200px] mx-auto w-[200px] md:w-[600px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        >
          <img src={logo} alt="main" width="100%" height="100%" />
        </motion.div>
        <h3>{counter}</h3>
        <h6 className="font-bold text-[#B63B3B] md:text-[30px] text-[15px] text-center">
          Vision & Mission
        </h6>
        <p className="md:w-[60%] w-[100%] p-[10px] text-center mx-auto mt-[10px] md:text-[20px] text-[10px] text-gray-300">
          Our vision is to transform the way businesses operate by harnessing
          the power of technology to drive growth and sustainability. Our
          mission is to provide user-friendly, scalable solutions tailored to
          the specific needs of our clients, ensuring they stay ahead in an
          ever-evolving digital landscape.
        </p> */}

        {/* <h6 className="font-bold text-[#B63B3B] text-2xl text-center">
          Core Values
        </h6>
        <p className="w-[60%] text-center mx-auto mt-[10px]">
          Our vision is to transform the way businesses operate by harnessing
          the power of technology to drive growth and sustainability. Our
          mission is to provide user-friendly, scalable solutions tailored to
          the specific needs of our clients, ensuring they stay ahead in an
          ever-evolving digital landscape.
        </p> */}
      </div>

      <div className="h-[30px] w-[full] text-center pb-5 text-gray-300 mt-[20px] text-[13px]">
        © Copyright by BlackBuck 2024
      </div>
    </div>
  );
}

export default Home;
