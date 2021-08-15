import React from "react";
import { Grid } from "@material-ui/core";
import * as S from "./dashboard.styles";
import BarVulnerabilitiesIpComponent from "../../components/bar-vulnerabilities-ip/bar-vulnerabilities-ip.component";

const DashboardComponent = ({ info }) => {
  return (
    <S.Wrapper>
      <Grid container>
        <Grid item md={6}>
          <BarVulnerabilitiesIpComponent info={info} />
        </Grid>
      </Grid>
    </S.Wrapper>
  );
};
export default DashboardComponent;
