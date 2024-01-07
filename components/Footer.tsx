import Link from "next/link";

const Footer = () => {
  return (
    <div className="attribution mx-auto my-auto">
      Challenge by{" "}
      <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </Link>
      . Coded by{" "}
      <Link href="https://www.linkedin.com/in/ioannis-nikitopoulos-547a99122/">
        Ioannis Nikitopoulos
      </Link>
      .
    </div>
  );
};

export default Footer;
