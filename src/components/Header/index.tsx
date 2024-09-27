"use client";
import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import { Link as ScrollLink } from "react-scroll";
import {getBasePath} from "@/app/base-path-loader"

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  let sections: NodeListOf<Element>;
  let $home: HTMLElement;
  let $features: HTMLElement;
  let $contact: HTMLElement;
  let $apiDoc: HTMLElement;
  let $docs: HTMLElement;

  if (typeof document !== 'undefined') {
    sections = document.querySelectorAll("section[id]");
    $home = document.getElementById('home_');
    $features = document.getElementById('features_');
    $contact = document.getElementById('contact_');
    $apiDoc = document.getElementById('apiDoc_');
    $docs = document.getElementById('docs_');
    window.addEventListener("scroll", navHighlighter);
  }

  function navHighlighter() {

    let scrollY = window.scrollY;
    let bool = false;

    sections.forEach(current => {
      if(!bool) {
        const sectionHeight = current.scrollHeight - 300;
        if ( (window.innerHeight + scrollY) >= document.body.offsetHeight - 2 ) {
          updateHeader("contact");
          bool = true;
        } else if (scrollY < sectionHeight) {
          updateHeader(current.getAttribute("id"));
          bool = true;
    } else {
          scrollY -= (sectionHeight + 300);
        }
    }
    });
  }

  function updateHeader(section: string) {
    switch (section) {
      case "home": {
        $home.className = "text-primary dark:text-white"
        $features.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $contact.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $apiDoc.className = "flex items-center text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $docs.className = "flex items-center text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        break;
      }
      case "features": {
        $home.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $features.className = "text-primary dark:text-white"
        $contact.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $apiDoc.className = "flex items-center text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $docs.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        break;
      }
      case "contact": {
        $home.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $features.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $contact.className = "text-primary dark:text-white"
        $apiDoc.className = "flex items-center text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $docs.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        break;
      }
      case "apiDoc": {
        $home.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $features.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $contact.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $apiDoc.className = "flex items-center text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $docs.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        break;
      }
      case "docs": {
        $home.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $features.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $contact.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $apiDoc.className = "flex items-center text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        $docs.className = "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
        break;
      }
      default: {
        break;
      }
    }
  }


  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-30 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-4"
                } `}
              >
                <Image
                    src={getBasePath() + "/images/logo/mainzelliste-logo-650-light.png"}
                    alt="logo"
                    className="hidden dark:block"
                    width={251}
                    height={46}
                />
                <Image
                    src={getBasePath() + "/images/logo/mainzelliste-logo-650.png"}
                  alt="logo"
                    className="block dark:hidden"
                  width={251}
                  height={46}
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0 " : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-[250px] cursor-pointer rounded border-[.5px] border-body-color/50 text-lg bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        <ScrollLink
                            id={menuItem.id + "_"}
                            smooth={true}
                            to={menuItem.path}
                            duration={500}
                            className="flex py-2 text-lg lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 transition-transform cursor-pointer"
                            >
                              {menuItem.title}
                          </ScrollLink>
                      </li>
                    ))}
                    <li key={menuData.length} className="group relative">
                      <Link
                          id={"docs_"}
                          href="/docs"
                          target="_blank"
                          className="py-2 text-lg lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 transition-transform cursor-pointer"
                      >Documentation</Link>
                    </li>
                    <li key={menuData.length + 1} className="group relative">
                      <Link
                          id={"apiDoc_"}
                          href="/api-doc"
                          target="_blank"
                          className="flex items-center py-2 text-lg lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 transition-transform cursor-pointer"
                      >API Doc <svg width="13.5" height="13.5" aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    className="ml-1.5">
                        <path fill="currentColor"
                              d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path>
                      </svg></Link>
                    </li>
                  </ul>
                </nav>
              </div>
              {/*<div className="flex items-center justify-end pr-16 lg:pr-0">*/}
              {/*    <ThemeToggler />*/}
              {/*</div>*/}
              </div>
            </div>
          </div>
      </header>
    </>
  );
};

export default Header;
