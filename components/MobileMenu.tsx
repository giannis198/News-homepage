import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <div className="">
      <Sheet>
        <SheetTrigger asChild>
          <div className="cursor-pointer lg:hidden">
            <Image
              className="h-auto w-auto"
              src="/icon-menu.svg"
              height={40}
              width={17}
              alt="hamburger menu"
            />
          </div>
        </SheetTrigger>
        <SheetContent side="right">
          <div>
            <NavLinks />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
