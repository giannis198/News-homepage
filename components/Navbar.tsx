import Image from "next/image";
import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="container my-6 flex items-center justify-between lg:py-10">
      <Image src="/logo.svg" height={40} width={65} alt="w" />
      <MobileMenu />
      <div className="hidden lg:block">
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
