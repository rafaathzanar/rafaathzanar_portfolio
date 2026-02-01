import { useEffect, useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme();

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  useEffect(() => {
    
    const sections = document.querySelectorAll("section[id]");
    if (sections.length === 0) {
      console.warn("No sections with id found! Please ensure your sections have an id attribute.");
    }

 
    const observer = new IntersectionObserver(
      (entries) => {
       
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          
          const mostVisible = visibleEntries.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0, 
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Icon colors based on theme
  const iconColor = theme === "dark" ? "#FFFFFF" : "#1a1a2e";

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 border-gray-200 dark:border-n-6 lg:bg-white/90 dark:lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-white dark:bg-n-8" : "bg-white/90 dark:bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-white dark:bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >

          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:text-xs lg:font-semibold ${
                  item.url === `#${activeSection}`
                    ? "text-color-1 border-b-2 border-color-1"
                    : "text-gray-600 dark:text-n-1/50"
                } lg:leading-5 lg:hover:text-gray-900 dark:lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <HamburgerMenu />
        </nav>

        {/* Desktop: show text buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button href="#contact">Contact Me</Button>
          <Button onClick={() => window.open("/resume.pdf", "_blank")}>My Resume</Button>
          <ThemeToggle />
        </div>

        {/* Mobile: icon buttons for Contact & Resume, theme toggle, and hamburger */}
        <div className="flex lg:hidden items-center gap-2 ml-auto">
          {/* Contact Icon Button */}
          <a
            href="#contact"
            className="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
            style={{ backgroundColor: theme === "dark" ? "#1B1B2E" : "#e5e5eb" }}
            aria-label="Contact Me"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>

          {/* Resume Icon Button */}
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="w-10 h-10 flex items-center justify-center rounded-full transition-colors"
            style={{ backgroundColor: theme === "dark" ? "#1B1B2E" : "#e5e5eb" }}
            aria-label="My Resume"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke={iconColor}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>

          <ThemeToggle />
          
          <Button px="px-3" onClick={toggleNavigation}>
            <MenuSvg openNavigation={openNavigation} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
