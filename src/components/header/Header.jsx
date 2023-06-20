import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/IMG_20230506_171548.png';
import HeaderSocials from './HeaderSocials';
import emoji from 'react-easy-emoji';

function Header() {
  return (
    <>
      <header>
        <div className="container header_container">
          <div className="me left">
            <img src={ME} alt="me" />
          </div>
          <div className="right">
            <h5>Hello I'm</h5>
            <h1>
              Akash Kumar Gupta{' '}
              <span className="wave-emoji">{emoji('👋')}</span>
            </h1>
            <h5 className="text-light">A Full-Stack Developer</h5>
            <CTA />
            <HeaderSocials />
          </div>

          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
