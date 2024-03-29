import { useState, useEffect } from "react";
import { Wrapper, Nav, ContainerLogo, ContainerMenuRight } from "./styles";
import elements from "../../assets/images/elements.png";

import { IoIosMenu } from "react-icons/io";
import { colors } from "../../Tools/colors";

export const Header = () => {
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      return setScrollNav(true);
    }
    setScrollNav(false);
  };

  return (
    <Wrapper>
      <Nav scrollNav={scrollNav}>
        <ContainerLogo id='animation-nav'>
          <img src={elements} alt="Logo" />
          <a href="/">
            <IoIosMenu color={colors.black200} size={40} />
          </a>
        </ContainerLogo>
        <ContainerMenuRight>
          <a id='animation-nav' href="/">About</a>
          <a id='animation-nav' href="/">Skills</a>
          <a id='animation-nav' href="/">projects</a>
          <a id='animation-nav' href="/">Contact</a>
        </ContainerMenuRight>
      </Nav>
    </Wrapper>
  );
};
