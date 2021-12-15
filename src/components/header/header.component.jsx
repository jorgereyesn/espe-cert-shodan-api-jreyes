import React from "react";

import * as S from "./header.styles.jsx";

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <S.Navigation>
          <S.ImageContainer to="top" spy={true} smooth={true}>
            <S.Image
              src="https://www.espe.edu.ec/wp-content/uploads/2018/11/espe.png"
              alt="logo"
            />
          </S.ImageContainer>

          <S.CustomLinkNav to="gi" spy={true} smooth={true}>
            General Information
          </S.CustomLinkNav>
          <S.CustomLinkNav to="vi" spy={true} smooth={true}>
            Vulnerability Information
          </S.CustomLinkNav>
          <S.CustomLinkNav to="db" spy={true} smooth={true}>
            Detailed Banners
          </S.CustomLinkNav>
          <S.CustomLinkNav to="pt" spy={true} smooth={true}>
            Prioritization Table
          </S.CustomLinkNav>
        </S.Navigation>
      </S.Wrapper>
    </S.Header>
  );
};
export default Header;
