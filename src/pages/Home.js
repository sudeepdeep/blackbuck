/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../assets/logo_01.png";
import videoBg from "../assets/intro.mp4";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      <NavBar />
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
          <motion.div
            className="md:flex-1"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
          >
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
          </motion.div>
        </div>
      </div>

      <div className="w-[100%] mx-auto flex justify-center">
        <motion.a
          whileHover={{ scale: 1.1 }}
          className="border-red-600 border-2 p-[10px] rounded-lg"
        >
          <a href="#">View More</a>
        </motion.a>
      </div>
      <div>
        <motion.div
          className="md:h-[600px] h-[200px] mx-auto w-[200px] md:w-[600px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        >
          <img src={logo} alt="main" width="100%" height="100%" />
        </motion.div>
        <h6 className="font-bold text-[#B63B3B] md:text-[30px] text-[15px] text-center">
          Vision & Mission
        </h6>
        <p className="md:w-[60%] w-[100%] p-[10px] text-center mx-auto mt-[10px] md:text-[20px] text-[10px] text-gray-300">
          Our vision is to transform the way businesses operate by harnessing
          the power of technology to drive growth and sustainability. Our
          mission is to provide user-friendly, scalable solutions tailored to
          the specific needs of our clients, ensuring they stay ahead in an
          ever-evolving digital landscape.
        </p>

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
