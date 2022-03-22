import { useContext, useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { FaMap, FaEnvelope, FaInstagramSquare, FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa';
import { MainContext } from '../../context/MainProvider';

// import second from 'bootstrap/dist/css'

import 'bootstrap/dist/css/bootstrap.css';
import './landingpage.css';

const menuList = [
  { name: 'inicio', route: 'home' },
  { name: 'nosotros', route: 'about' },
  { name: 'servicios', route: 'services' },
  { name: 'reseña', route: 'reviews' },
  { name: 'contacto', route: 'contact' },
];

export const LayoutPage = () => {
  const { scroll } = useContext(MainContext);
  const [menuCheck, setMenuCheck] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navlinkRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    handleScroll(scroll);
    return () => {};
  }, [scroll]);

  const handleScroll = (scrollY: number): void => {
    if (menuRef.current) menuRef.current.classList.remove('fa-times');
    navlinkRef.current?.classList.remove('active');

    if (scrollY > 60) {
      navbarRef.current?.classList.add('active');
    } else {
      navbarRef.current?.classList.remove('active');
    }
    setMenuCheck(false);
  };

  const handleMenu = () => {
    setMenuCheck((stmenu) => !stmenu);
    // menuRef.current?.classList.toggle('fa-times');
    navlinkRef.current?.classList.toggle('active');
  };

  return (
    <>
      <header ref={headerRef} className="header">
        <div className="contact-info">
          <p>
            <FaMap className="icon" /> Barcelona, Anzoategui - Ven.
          </p>
          <p>
            <FaEnvelope className="icon" /> servidentco@gmail.com
          </p>
          <p>
            <FaPhoneAlt className="icon" /> +123-456-7890
          </p>
          <p>
            <FaInstagramSquare className="icon" /> @servidentmj
          </p>
        </div>

        <nav ref={navbarRef} className="navbar">
          <div className="logo">
            <img src="/images/servident-mj.svg" alt="servident mj" />
            <div className="logoname">
              <h1>
                <span className="colorfucsia fontAlata">ServiDent</span>
                <span className="ml-2 colorvioleta fontAlata">MJ</span>
              </h1>
              <h3>
                <span className="colorvioleta fontAlata">CENTRO</span>
                <span className="colorfucsia ml-2 fontAlata">ODONTOLOGICO</span>
              </h3>
            </div>
          </div>
          <div ref={navlinkRef} className="links">
            {menuList.map((menuItem) => (
              <a key={menuItem.route} href={`#${menuItem.route}`}>
                {menuItem.name}
              </a>
            ))}
          </div>
          <div id="menu-btn" ref={menuRef} onClick={handleMenu}>
            {menuCheck ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
