import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../styles/styles';
import Logo from '../assets/logo.png';
import { IoMdNotifications, IoIosHome } from 'react-icons/io';
import { BsFillPersonFill, BsMessenger } from 'react-icons/bs';

const Header = () => {
  const nav = React.useRef();
  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  React.useEffect(() => {
    const li = nav.current.querySelectorAll('li');
    li.forEach((item) => {
      console.log();
      item.addEventListener('click', toggleMenu);
    });
  }, [nav]);
  return (
    <HeaderStyle>
      <div>
        <Link id='logo' to=''>
          <img src={Logo} alt='' />
        </Link>
        <nav id='nav' ref={nav}>
          <button
            onClick={toggleMenu}
            aria-label='Abrir Menu'
            id='btn-mobile'
            aria-haspopup='true'
            aria-controls='menu'
            aria-expanded='false'
          >
            Menu
            <span id='hamburger'></span>
          </button>
          <ul id='menu' role='menu'>
            <li>
              <Link to='/App'>
                <IoIosHome />
                Pagina inicial
              </Link>
            </li>
            <li>
              <Link to='message'>
                <BsMessenger />
                Mensagens
              </Link>
            </li>
            <li>
              <Link to='publica'>
                <IoMdNotifications />
                Notificacoes
              </Link>
            </li>

            <li>
              <Link to='conta'>
                <BsFillPersonFill />
                Meu Perfil
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  );
};

export default Header;
