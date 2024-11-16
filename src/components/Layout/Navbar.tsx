import Link from "next/link";
import { BsAirplaneEngines } from "react-icons/bs";
import Image from "next/image";
import Logo from "../../public/assets/Logo/building-you-logo.png";

const Navbar: React.FC<{}> = ({}) => {
  return (
    <>
      <header>
        <nav className=" border-b border-Dark-400 !bg-Dark-theme/75 fixed w-full shadow-sm backdrop-blur-sm z-50">
          <div className="py-2">
            <Link
              href="/"
              className="font-bold text-2xl sm:text-3xl flex items-center justify-center text-white"
            >
              <Image className="mr-3 w-8" src={Logo} alt="Logo" />
              Building you
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
