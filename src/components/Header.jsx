import React, { useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import { DesktopMenu } from "./DesktopMenu";// Desktop
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const links = [
    { title: "Home", href: "/" },
    { title: "Login", href: "/login" },
    { title: "Student", href: "/student" },
    { title: "Trainer", href: "/trainer" }
  ];
  const {mobile, desktop} = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <header>
      <div className="">
        {/* NAVIGATION  */}
        {/* MENU DESKTOP  */}
        {/* SI ECRAN > 900  */}
        { desktop && <DesktopMenu links={links} />}
        {/* SI ECRAN < 900  */}
        { mobile && <MobileMenu links={links} />}
      </div>
    </header>
  );
};