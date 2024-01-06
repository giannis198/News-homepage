import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="container my-6 flex items-center justify-between">
      <div>
        <Image src="/logo.svg" height={40} width={65} alt="w" />
      </div>
      <div className="lg:hidden">
        <Image
          src="/icon-menu.svg"
          height={40}
          width={40}
          alt="hamburger menu"
        />
      </div>
    </nav>
  );
};

export default Navbar;
