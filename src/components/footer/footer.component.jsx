import React from "react";
import * as S from "./footer.styles";
import Logo from "../../static/media/espe.png";

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Content>
          <S.Image
            src="https://www.espe.edu.ec/wp-content/uploads/2018/11/espe.png"
            alt="logo"
          />
          <S.Description>
            <strong>PROJECT NAME.</strong> <br />
            Design and Implementation of the IT infrastructure and service
            management system for the ESPE Academic CERT
          </S.Description>
          <S.Description>
            <strong>© 2021 PIC-2020-ESPE-CERT.</strong> <br />
            Todos los derechos reservados.
          </S.Description>
        </S.Content>
      </S.Wrapper>
    </S.Footer>
  );
};

export default Footer;
