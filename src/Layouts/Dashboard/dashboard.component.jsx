import React from "react";
import { Grid } from "@material-ui/core";
import * as S from "./dashboard.styles";
import BarVulnerabilitiesIpComponent from "../../components/bar-vulnerabilities-ip/bar-vulnerabilities-ip.component";
import DoughnutVulnerabilitiesCvssComponen from "../../components/doughnut-vulnerabilities-cvss/doughnut-vulnerabilities-cvss.component";

const DashboardComponent = ({ info }) => {
  return (
    <S.Wrapper>
      <Grid container justifyContent="center">
        <Grid item md={6}>
          <BarVulnerabilitiesIpComponent info={info} />
        </Grid>
        <Grid item md={6}>
          <BarVulnerabilitiesIpComponent info={info} />
        </Grid>
        <Grid item md={6}>
          <DoughnutVulnerabilitiesCvssComponen info={info} />
        </Grid>
      </Grid>
    </S.Wrapper>
  );
};
export default DashboardComponent;
