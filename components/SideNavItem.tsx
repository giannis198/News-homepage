import Link from "next/link";
import { Separator } from "./ui/separator";

interface SideNavItemProps {
  title: string;
  description: string;
}

const SideNavItem = ({ title, description }: SideNavItemProps) => {
  return (
    <div className="space-y-2">
      <Link href="#" className="section2__title">
        {title}
      </Link>
      <p className="section2__desc">{description}</p>
      <Separator className="bg-off_white" />p
    </div>
  );
};

export default SideNavItem;
