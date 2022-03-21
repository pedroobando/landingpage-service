import { useContext, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContext } from '../../context/MainProvider';

import '../../styles/bootstrap.min.css';
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
  };

  const handleMenu = () => {
    menuRef.current?.classList.toggle('fa-times');
    navlinkRef.current?.classList.toggle('active');
  };

  return (
    <>
      <header ref={headerRef} className="header">
        <div className="contact-info">
          <p>
            <i className="fas fa-map"></i> mumbai, india - 400104
          </p>
          <p>
            <i className="fas fa-envelope"></i> shaikhanas@gmail.com
          </p>
          <p>
            <i className="fas fa-phone"></i> +123-456-7890
          </p>
        </div>

        <nav ref={navbarRef} className="navbar">
          <a href="#" className="logo">
            <i className="fas fa-tools mr-2"></i>fixpro
          </a>
          <div ref={navlinkRef} className="links">
            {menuList.map((menuItem) => (
              <a key={menuItem.route} href={`#${menuItem.route}`}>
                {menuItem.name}
              </a>
            ))}
          </div>
          <div id="menu-btn" ref={menuRef} onClick={handleMenu} className="fas fa-bars"></div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};
