import { Fragment, useState } from "react";

import Logo from "../../assets/logo.svg";
import IconMenu from "../../Icons/IconMenu";
import IconClose from "../../Icons/IconClose";
import ImageAvatar from "../../assets/image-avatar.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import NavData from "./NavData";

const Header = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showCartHandler = () => {
    setSidebar(true);
  };

  const hideCartHandler = () => {
    setSidebar(false);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.main}>
          <button onClick={showCartHandler} className={classes["icon-menu"]}>
            <IconMenu />
          </button>
          {sidebar && (
            <nav className={classes["nav-menu"]}>
              <button
                onClick={hideCartHandler}
                className={classes["icon-close"]}
              >
                <IconClose />
              </button>
              <ul className={classes["side-links"]}>
                {NavData.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.path} className={classes["side-link"]}>
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
          <img src={Logo} alt="Logo" />
          <ul className={classes["nav-links"]}>
            {NavData.map((item, index) => {
              return (
                <li key={index}>
                  <a href={item.path} className={classes.link}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.account}>
          <HeaderCartButton onClick={props.onShowCart} />
          <img src={ImageAvatar} className={classes.img} alt="Avatar" />
        </div>
      </header>
      <div className={classes.line}></div>
    </Fragment>
  );
};

export default Header;
