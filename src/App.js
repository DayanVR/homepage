import "./styling/style.scss";
import webDesktop from "./img/image-web-3-desktop.jpg";
import iconMenu from "./img/icon-menu.svg";
import iconMenuClose from "./img/icon-menu-close.svg";
import logo from "./img/logo.svg";
import gaming from "./img/image-gaming-growth.jpg";
import retro from "./img/image-retro-pcs.jpg";
import topLaptops from "./img/image-top-laptops.jpg";

import React, {useState} from "react";

function App() {

  const [active, setActive] = useState('nav-menu');
  const [toggleIcon, setToggleIcon] = useState('nav-toggler');
  const navToggle = () => {
    active === 'nav-menu' ? setActive('nav-menu nav-active') : setActive('nav-menu');
  
    toggleIcon === 'nav-toggler' ? setToggleIcon('nav-toggler toggle') : setToggleIcon('nav-toggler');
  }

  return (
    <div className="App bg-white h-screen ">
      <div className="custom-container container">
        <header className="flex col-span-full justify-between">
          <img src={logo} alt="" className="logo h-fit place-self-center"/>
          <nav className='navBar'>
            <div>
              <img className={toggleIcon} src={toggleIcon === 'nav-toggler' ? iconMenu : iconMenuClose} alt='' onClick={navToggle}/>
            </div>
            <ul className={active}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">New</a>
              </li>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">Trending</a>
              </li>
              <li>
                <a href="#">Categories</a>
              </li>
            </ul>
          </nav>
        </header>
        <img
          src={webDesktop}
          className="col-start-1 col-end-3 row-start-2 row-end-3"
          alt="games"
        />
        <section className="section-1 ">
          <h1>New</h1>
          <fragment>
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </fragment>
          <fragment>
            <h2>The Downsides of AI Artistry</h2>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </fragment>
          <fragment>
            <h2>Is VC Funding Drying Up?</h2>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </fragment>
        </section>
        <section className="section-2">
          <h1>The Bright Future of Web 3.0?</h1>
        </section>
        <section className="section-3">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="w-3/6">READ MORE</button>
        </section>
        <fragment className="fragmento-1">
          <img src={retro} alt="retro" />
          <div className="info">
            <h2>01</h2>
            <h3>Reviving Retro PCs</h3>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </fragment>
        <fragment className="fragmento-2">
          <img src={topLaptops} alt="topLaptops" />
          <div className="info">
            <h2>02</h2>
            <h3>Top 10 Laptops of 2022</h3>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </fragment>
        <fragment className="fragmento-3">
          <img src={gaming} alt="gaming" />
          <div className="info">
            <h2>03</h2>
            <h3>The Growth of Gaming</h3>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </fragment>
      </div>
    </div>
  );
}

export default App;
