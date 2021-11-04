import styled from "styled-components";
import { Container, AppBar } from "@material-ui/core";
import { Link } from "react-scroll";

export const Header = styled(AppBar)`
  padding-top: 1em;
  padding-bottom: 1em;
  background-color: white !important;
`;

export const Wrapper = styled(Container)`
  padding: 0.5em;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CustomLinkNav = styled(Link)`
  color: black !important;
  text-transform: uppercase;
  font-size: 1em;
  text-align: center;

  &:hover {
    border-bottom: 3px solid green;
  }
`;
export const ImageContainer = styled.div``;
export const Image = styled.img`
  width: 200px;
  height: 50px;
`;
