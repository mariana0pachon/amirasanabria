import { useState, useEffect } from "react";

const logo = new URL("../assets/images/logo.png", import.meta.url);

export function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const currentBasePath = window.location.pathname.split("/", 2).join("/");

  function isActive(routes) {
    return routes.includes(currentBasePath) ? "active" : "";
  }

  function toggleMobileMenu() {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  }

  useEffect(() => {
    if (mobileMenuIsOpen) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }

    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [mobileMenuIsOpen]);

  function navigationLinks() {
    return (
      <div className={"navigation-links" + (mobileMenuIsOpen ? " open" : "")}>
        <a href='/research' className={isActive(["/research", "/"])}>
          research
        </a>
        <a href='/movies' className={isActive(["/movies"])}>
          movies
        </a>
        <a href='/about' className={isActive(["/about"])}>
          about
        </a>
      </div>
    );
  }

  function desktopHeader() {
    return (
      <div className='header desktop'>
        <a href='/'>
          <img src={logo} alt='Logo' className='logo' />
        </a>
        {navigationLinks()}
      </div>
    );
  }

  function mobileHeader() {
    return (
      <div>
        <div className='header mobile'>
          <a href='/'>
            <img src={logo} alt='Logo' className='logo' />
          </a>

          <div
            className={"mobile-toggle" + (mobileMenuIsOpen ? " open" : "")}
            onClick={() => toggleMobileMenu()}
          ></div>
        </div>
        {navigationLinks()}
      </div>
    );
  }

  return (
    <div>
      {mobileHeader()}
      {desktopHeader()}
    </div>
  );
}
