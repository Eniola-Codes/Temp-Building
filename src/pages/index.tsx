import { motion } from "framer-motion";
import Button from "@/components/reusables/Button";
import {
  BsArrowRight,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import ScrambledText from "@/lib/Frontend/ScrambledText";
import {
  IncomingVariant,
  arrowVariant,
  headerVariant,
  infoVariant,
} from "@/lib/Frontend/FramerVariants";
import { FiBriefcase, FiLinkedin } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

const Home: React.FC = () => {
  return (
    <motion.section className="relative tall:h-screen tall:flex tall:justify-center tall:overflow-hidden items-center px-3 sm:px-8 pt-16 pb-7 tall:py-28">
      <div className="my-12 tall:my-0 tall:translate-y-6">
        {/* Header */}
        <motion.div
          variants={headerVariant}
          animate="animate"
          initial="static"
          className="text-5xl leading-slightly-loose  sm:text-6.5xl lg:text-7.5xl 2xl:text-8xl 2xl:leading-2x-loose font-bold tracking-tight text-center sm:leading-loose lg:leading-extra-loose"
        >
          <ScrambledText text="IT'S." durationInSeconds={1} />
          <ScrambledText text="ALMOST." durationInSeconds={2} />
          <ScrambledText text="READY." durationInSeconds={3} />
        </motion.div>

        {/* Info */}
        <motion.div variants={infoVariant} animate="animate" initial="static">
          <div className="text-lg sm:text-xl text-center mt-4 tall:mt-8 text-Dark-500 font-light">
            <p className="w-11/12 m-auto lg:w-3/4">
              Building you is a software development agency focused on building solutions for brands and businesses looking to scale & automate the boring things.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center space-x-3 sm:space-x-5 mt-8 tall:mt-10">
            
            <Button
              type="button"
              isBtnLoading={undefined}
              link="mailto:hello@buildingyou.co"
              className=" border-[#EFBF28] flex justify-center space-x-2 items-center !bg-[#EFBF28] !text-Dark-100 "
            >
              <span>Get In Touch</span>
              <motion.div
                variants={arrowVariant}
                animate="animate"
                initial="static"
              >
                <BsArrowRight className="text-2xl" />
              </motion.div>
            </Button>
            <Button
              isBtnLoading={undefined}
              link="/works"
              className="  bg-Dark-100 text-white dark:bg-white border dark:hover:text-white dark:hover:bg-Dark-headTheme dark:border-white hover:text-Dark-100 border-Dark-100 flex justify-center items-center space-x-2 hover:bg-white dark:text-Dark-headTheme"
            >
              <span>Our Works</span>
              <FiBriefcase className="text-2xl" />
            </Button> 
          </div>

          {/* Trusted Sources */}
          <div>
            <motion.p
              className="text-center mt-16 tall:mt-20 font-semibold text-base text-white"
              variants={IncomingVariant}
            >
              NEW WEBSITE COMING SOON!
            </motion.p>
            <div className="flex items-center space-x-7 mt-10 relative m-auto w-fit ">
              <a
                href="https://www.linkedin.com/company/building-you-digital/"
                target="_blank"
                className="inline-block bg-[#FFF] p-3 sm:p-4 rounded-full hover:bg-[#EFBF28]"
              >
                <FiLinkedin className="text-[#000] text-xl  " />
              </a>
              <a
                className="inline-block bg-[#FFF] p-3 sm:p-4 rounded-full hover:bg-[#EFBF28]"
                href="https://www.instagram.com/buildingyou__?igsh=MmVlMjlkMTBhMg=="
                target="_blank"
              >
                <BsInstagram className="text-[#000] text-xl " />
              </a>
              <a
                className="inline-block bg-[#FFF] p-3 sm:p-4 rounded-full hover:bg-[#EFBF28]"
                href=" https://twitter.com/BuildingYou?s=20"
                target="_blank"
              >
                <RiTwitterXFill className="text-[#000] text-xl " />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;
