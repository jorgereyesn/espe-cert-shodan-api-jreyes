import styled from "styled-components";
import { Container } from "@material-ui/core";

export const Footer = styled.footer`
  border-top: 5px solid green;
`;
export const Wrapper = styled(Container)``;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 200px;
  height: 55px;
`;
export const Description = styled.p`
  max-width: 300px;
`;
