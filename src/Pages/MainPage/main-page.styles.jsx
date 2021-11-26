import styled from "styled-components";
import { Grid } from "@material-ui/core";
export const Wrapper = styled.div`
  padding-top: 100px;
  background-color: rgba(189, 203, 217);
`;
export const Title = styled.h2`
  margin: 0;
  padding: 0.5em;
  background-color: black;
  color: white;
  text-align: center;
`;
export const Description = styled.p`
  margin: 0;
  padding: 0.5em;
  background-color: black;
  color: white;
  text-align: right;
  font-size: 1.8em;
  font-weight: 500;
`;

export const Line = styled.hr`
  border: 4px solid green;
  margin: 0;
`;

export const DescriptionVariables = styled.p`
  color: black;
  background-color: rgba(116, 238, 63, 0.5);
  border-radius: 10px;
  margin: 0;
  padding: 0.5em;
  text-align: left;
  font-size: 1.2em;
`;

export const Variable = styled.h3`
  color: ${(props) => props.color ?? "white"};
  padding: 1em;
`;
export const InfoContainerRisk = styled.div`
  background-color: ${(props) => props.color};
  height: 100%;
`;
export const InfoContainer = styled.div`
  background-color: black;
  height: 100%;
`;

export const GridContainer = styled(Grid)`
  padding: 2em;
`;

export const Loading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15em;
  padding-bottom: 15em;
`;

export const Message = styled.h2`
  color: #7ed321;
  font-size: 30px;
`;
