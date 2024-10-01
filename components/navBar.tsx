"use client";

import {
    Navbar as NextUINavbar,
    NavbarContent,
    NavbarMenu,
    NavbarMenuToggle,
    NavbarBrand,
    NavbarItem,
    NavbarMenuItem,
  } from "@nextui-org/navbar";
  import React, { useEffect, useState }  from "react";
  import NavLink from "./link";
  import { navLinks } from "@/inputs/navInput";
  import AstrxsLogo from "./astrxsLogo";
import { ThemeSwitch } from "./switch";
import { useTheme } from "next-themes";

export const Navbar = () => { 
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const { theme } = useTheme();
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
    
    return (
    <NextUINavbar disableAnimation={true} disableScrollHandler={true} onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <AstrxsLogo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex p-0" justify="center">
            {
                navLinks.map((link) => {
                return (
                    <NavbarItem className="p-0 leading-none" key={link.href}>
                        <NavLink theme={theme} title={link.title} href={link.href} />
                    </NavbarItem>
                )
                })
            }
        </NavbarContent>
  
        <NavbarContent justify="end">
          <ThemeSwitch />
        </NavbarContent>

        <NavbarMenu>
        {
            navLinks.map((link) => {
              return (
                <NavbarMenuItem key={link.href}>
                  <NavLink  theme={theme} title={link.title} href={link.href} />
                </NavbarMenuItem>
              )
            })
          }
        </NavbarMenu>
      </NextUINavbar>
    );
  };