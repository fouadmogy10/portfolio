import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import Typed from 'react-typed';
const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>
        <Typed
                    strings={['Fouad Mogy' ,'Front-End Developer']}
                    typeSpeed={100}
                    loop={true}
                    backDelay={1}
                    backSpeed={50}
                />
        </h1>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
