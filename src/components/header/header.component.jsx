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
            Informacion General
          </S.CustomLinkNav>
          <S.CustomLinkNav to="vi" spy={true} smooth={true}>
            Informacion de Vulnerabilidades
          </S.CustomLinkNav>
          <S.CustomLinkNav to="db" spy={true} smooth={true}>
            Banner Detallados
          </S.CustomLinkNav>
          <S.CustomLinkNav to="pt" spy={true} smooth={true}>
            Tabla de Priorizacion
          </S.CustomLinkNav>
        </S.Navigation>
      </S.Wrapper>
    </S.Header>
  );
};
export default Header;
