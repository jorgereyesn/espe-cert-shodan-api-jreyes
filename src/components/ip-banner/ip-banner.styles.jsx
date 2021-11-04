import styled from "styled-components";

import { Container, Grid } from "@material-ui/core";

export const Wrapper = styled(Container)`
  background-color: #17202a;
  background-image: -webkit-linear-gradient(30deg, #34495e 50%, #212f3d 50%);
  color: white;
  border: 2px solid white;
  padding: 0.5em;
`;

export const DataGridContainer = styled(Grid)`
  padding-top: 1em;
  padding-bottom: 1em;
`;
export const DataGrid = styled(Grid)`
  padding-top: 1em;
  padding-bottom: 1em;
`;
export const Ip = styled.h2``;

export const Tags = styled.strong`
  color: white;
  background-color: rgba(116, 238, 63, 0.3);
  padding: 0.2em;
  font-size: 0.9em;
  display: inline-block;
  text-align: center;
  margin-right: 0.3em;
  margin-bottom: 0.3em;
  border-radius: 5px;
`;

export const Link = styled.a`
  color: white;
  background-color: rgba(116, 238, 63, 0.3);
  padding: 0.2em;
  font-size: 0.9em;
  display: inline-block;
  text-align: center;
  margin-right: 0.3em;
  margin-bottom: 0.3em;
  border-radius: 5px;
  text-decoration: none;

  &:hover {
    background-color: rgba(116, 238, 63, 0.5);
    font-weight: 500;
  }
`;
