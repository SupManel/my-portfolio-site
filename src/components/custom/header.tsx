import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      let foundSection = "home";

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            foundSection = sections[i];
            break;
          }
        }
      }

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-center px-4">
        <nav className="flex items-center gap-6">
          {["home", "about", "projects", "contact"].map((section) => (
            <Button
              key={section}
              variant="ghost"
              className={`text-white hover:text-white/80 ${
                activeSection === section ? "text-white/100" : ""
              }`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
