import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import React, { useEffect }  from "react";
import NavLink from "./link";
import { navLinks } from "@/inputs/navInput";
import AstrxsLogo from "./astrxsLogo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  
  return (
  <NextUINavbar className="font-medium" disableAnimation={true} disableScrollHandler={true} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AstrxsLogo size={32}/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 font-medium" justify="end">
        {
          navLinks.map((link) => {
            return (
              <NavbarItem key={link.href}>
                <NavLink  title={link.title} href={link.href} />
              </NavbarItem>
            )
          })
        }
      </NavbarContent>
      <NavbarMenu className="font-sans">
      {
          navLinks.map((link) => {
            return (
              <NavbarMenuItem key={link.href}>
                <NavLink  title={link.title} href={link.href} />
              </NavbarMenuItem>
            )
          })
        }
      </NavbarMenu>
    </NextUINavbar>
  );
};