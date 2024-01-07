import Link from "next/link";

const NavLinks = () => {
  const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];
  return (
    <div className="grid gap-5 pt-20 text-xl font-normal text-very_dark_blue lg:grid-flow-col lg:gap-x-16 lg:pt-0">
      {navLinks.map((link) => (
        <Link className="hover:text-soft_red" key={link} href="#">
          {link}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
