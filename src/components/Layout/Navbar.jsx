import { AlignRight, Building, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 text-black px-4 py-2 backdrop-filter backdrop-blur-lg bg-opacity-10 border-gray-900 w-full h-[10vh] flex justify-between items-center lg:px-10 lg:py-10 shadow-lg z-50">
      <div className="flex items-center gap-2 font-bold text-lg">
        <Building />
        JustHome
      </div>

      <div className="hidden md:flex md:gap-4 md:font-medium">
        <Link to="/" className="hover:text-white duration-200 hover:scale-110">Home</Link>
        <Link to="/listings" className="hover:text-zinc-900 duration-200 hover:scale-110">Listings</Link>
        <Link to="/members" className="hover:text-zinc-900 duration-200 hover:scale-110">Members</Link>
        <Link to="/blog" className="hover:text-zinc-900 duration-200 hover:scale-110">Blog</Link>
        <Link to="/contact" className="hover:text-zinc-900 duration-200 hover:scale-110">Contact</Link>
      </div>
      <div className="items-center hidden lg:flex lg:gap-4">
        <div className="flex items-center gap-1 hover:text-zinc-900 duration-200 hover:scale-110">
            <Phone /> +91 8860243743
        </div>
        <div>
            <button className="border px-5 py-2 rounded-full font-bold text-yellow-300 hover:text-white duration-200 hover:scale-110">Add Property</button>
        </div>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignRight />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                {" "}
                <Link to="/" className="flex items-center gap-2 font-bold text-lg">
                  <Building />
                  JustHome
                </Link>
              </SheetTitle>
              <div className="text-left font-medium text-lg mb-20">
                <div className="mt-10">Home</div>
                <div className="mt-2">Listings</div>
                <div className="mt-2">Members</div>
                <div className="mt-2">Blog</div>
                <div className="mt-2">Content</div>
              </div>

              <div className="mt-[14vh]">
                <div className="flex items-start gap-2 ">
                  <Phone />
                  +91 8860264343
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
