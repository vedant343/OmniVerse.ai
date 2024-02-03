import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
    </div>
  );
};

export default Navbar;
