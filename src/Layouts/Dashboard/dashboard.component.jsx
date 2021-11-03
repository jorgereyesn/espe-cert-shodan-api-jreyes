import React from "react";
import { Grid } from "@material-ui/core";
import * as S from "./dashboard.styles";
import BarVulnerabilitiesIpComponent from "../../components/bar-vulnerabilities-ip/bar-vulnerabilities-ip.component";
import DoughnutVulnerabilitiesCvssComponen from "../../components/doughnut-vulnerabilities-cvss/doughnut-vulnerabilities-cvss.component";
import LineYearsVulnerabilitiesComponent from "../../components/line-years-vulnerabilities/line-years-vulnerabilities.component";
import BarPorts from "../../components/bar-ports/bar-ports.component";

const DashboardComponent = ({ info }) => {
  return (
    <S.Wrapper>
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={6}>
          <BarVulnerabilitiesIpComponent info={info} />
        </Grid>
        <Grid item md={6}>
          <LineYearsVulnerabilitiesComponent info={info} />
        </Grid>
        <Grid item md={6}>
          <DoughnutVulnerabilitiesCvssComponen info={info} singleIp={false} />
        </Grid>
        <Grid item md={6}>
          <BarPorts info={info} />
        </Grid>
      </Grid>
    </S.Wrapper>
  );
};
export default DashboardComponent;
