import { motion } from "framer-motion";
import Button from "@/components/reusables/Button";
import {
  BsArrowRight,
  BsChevronLeft,
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
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import useWidth from "@/hooks/width-hook";
import { projects } from "@/data";
import { Link } from "react-scroll";
import { default as NextLink } from "next/link";

const Home: React.FC = () => {
  const { responsive } = useWidth(1024);

  return (
    <motion.section className="relative tall:h-screen tall:flex tall:justify-center tall:overflow-hidden items-center pt-20 sm:pt-24 pb-7 tall:py-28">
      <div id="Work">
        <div className="lg:flex justify-between items-center lg:px-10 sm:px-5 px-3 ">
          <div className="flex items-center justify-between sm:justify-normal sm:space-x-8 text-5xl w-full lg:w-3/4">
            <NextLink
              href={"/"}
              className="hover:bg-white duration-150 hover:text-black transition-all sm:text-2xl text-xl w-16 h-16 sm:h-20 sm:w-20 flex items-center justify-center rounded-full border-Dark-400 border bg-grey-bg-100"
            >
              <BsChevronLeft />
            </NextLink>
          </div>
        </div>
        <div className="space-y-3 lg:space-y-0 lg:flex-row flex-col flex lg:border-t border-Dark-400 mt-5 sm:mt-10">
          <div className="lg:block lg:w-1/6 lg:border-b border-Dark-400 sticky top-[3.75rem] bg-Dark-theme lg:top-0 lg:static border-t lg:border-t-0">
            <div className="flex scrollbar-none whitespace-nowrap lg:whitespace-normal border-Dark-400  overflow-x-auto lg:overflow-hidden space-x-3 px-5 lg:ml-0 lg:space-x-0 lg:block py-3 lg:py-10 text-center lg:sticky lg:top-20">
              {projects.map((item, index) => (
                <Link
                  key={item?.name}
                  className={` ${
                    index === 0 && "lg:!mt-0 lg:!mx-auto"
                  } cursor-pointer hover:border-Dark-400 border lg:!mx-auto border-transparent py-2 px-4 lg:px-0 rounded-full lg:block lg:mt-5 text-sm lg:text-base lg:w-40 uppercase hover:bg-grey-bg-100 text-grey-text-200 hover:text-grey-text-100 transition-all`}
                  to={item?.name}
                  spy={true}
                  smooth={true}
                  offset={responsive ? -80 : -190}
                  duration={1000}
                  delay={0}
                  activeClass="bg-grey-bg-100 !border-Dark-400 !text-grey-text-100 border"
                >
                  {item?.name}
                </Link>
              ))}
            </div>
          </div>

          {!responsive && (
            <div className="flex flex-col space-y-20 lg:space-y-0 lg:hidden">
              {projects.map((project) => (
                <div
                  className="space-y-2 lg:space-y-0"
                  key={project?.name}
                  id={project?.name}
                >
                  <NextLink
                    href={project?.link}
                    className="lg:w-2/6 lg:px-10 sm:px-5 px-3"
                  >
                    <Image
                      src={project?.image}
                      alt="Project image"
                      className="h-full w-full object-cover"
                    />
                  </NextLink>
                  <div className="w-full lg:mt-0 lg:w-3/6 lg:p-10 lg:border-r border-Dark-400 lg:px-10 sm:px-5 px-2.5">
                    <div className="flex space-x-4 items-center">
                      {project.list.map((item) => (
                        <button
                          key={item?.name}
                          className={`border-Dark-400 text-grey-text-100 bg-grey-bg-100 border px-5 py-1.5 mt-3 lg:mt-0 rounded-full`}
                        >
                          {item?.name}
                        </button>
                      ))}
                    </div>
                    <div className="mt-5">
                      <span className="text-4xl sm:text-6xl lg:text-8xl font-semibold uppercase  inline-block mr-3">
                        {project?.name}
                      </span>

                      <NextLink href={project?.link} className="text-[#FDB022]">
                        {project?.link}
                      </NextLink>
                    </div>
                    <div className="mt-2 sm:mt-5 lg:text-xl text-white/40 font-light">
                      {project?.text1 && <p className="">{project?.text1}</p>}
                      {/* {project?.text2 && (
                      <p className="mt-5 lg:block hidden">{project?.text2}</p>
                    )} */}
                    </div>
                    <div className="flex items-center justify-between mt-4 lg:mt-10">
                      <NextLink
                        href={project?.link}
                        target="_blank"
                        className="uppercase border bg-black text-sm sm:text-base text-center w-44 py-2.5 rounded-full hover:bg-white hover:text-black transition-all font-medium"
                      >
                        View Project
                      </NextLink>
                      <MdArrowOutward className="text-5xl" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {responsive && (
            <div className="lg:w-5/6 hidden lg:block">
              {projects.map((project) => (
                <div
                  className="flex border-b border-Dark-400"
                  key={project.name}
                  id={project?.name}
                >
                  <div className="lg:w-3/5 lg:p-10 lg:border-r lg:border-l border-Dark-400 lg:px-10 sm:px-5 px-3">
                    <div className="flex space-x-4 items-center">
                      {project.list.map((item) => (
                        <button
                          key={item?.name}
                          className={`border-Dark-400 text-grey-text-100 bg-grey-bg-100 border px-5 py-1.5 mt-3 lg:mt-0 rounded-full`}
                        >
                          {item?.name}
                        </button>
                      ))}
                    </div>
                    <div className="mt-5 flex justify-between items-end">
                      <span className="text-4xl sm:text-6xl lg:text-7xl font-semibold uppercase inline-block">
                        {project?.name}
                      </span>

                      <NextLink href={project?.link} className="text-[#FDB022]">
                        {project?.link}
                      </NextLink>
                    </div>
                    <div className="mt-2 sm:mt-5 lg:text-xl text-white/40 font-light">
                      {project?.text1 && <p className="">{project?.text1}</p>}
                      {project?.text2 && (
                        <p className="mt-5 lg:block hidden">{project?.text2}</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-4 lg:mt-10">
                      <NextLink
                        href={project?.link}
                        target="_blank"
                        className="uppercase border bg-black text-sm sm:text-base text-center w-44 py-2.5 rounded-full hover:bg-white hover:text-black transition-all font-medium"
                      >
                        View Project
                      </NextLink>
                      <MdArrowOutward className="text-5xl" />
                    </div>
                  </div>
                  <NextLink href={project?.link} className="lg:w-2/5">
                    <Image
                      src={project?.image}
                      alt="Project image"
                      className="h-full w-full object-cover"
                    />
                  </NextLink>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
