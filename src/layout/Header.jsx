import React, { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { DesktopMenu } from "./header/DesktopMenu";// Desktop
import { MobileMenu } from "./header/MobileMenu";

export const Header = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "Login", href: "/login" },
    { title: "Student", href: "/etudiant" },
    { title: "Trainer", href: "/formateur" }
  ];
  const {mobile, desktop} = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <header>
      <div className="bg-amber-100">
        {/* NAVIGATION  */}


        {/* MENU DESKTOP  */}
        {/* SI ECRAN > 900  */}
        { desktop && <DesktopMenu links={links} />}

        {/* MENU Mobile  */}
        {/* SI ECRAN < 900  */}
        { mobile && <MobileMenu links={links} />}
      </div>
    </header>
  );
};