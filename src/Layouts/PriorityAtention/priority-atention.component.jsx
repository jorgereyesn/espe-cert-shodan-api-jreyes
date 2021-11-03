import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  addVulnVariables,
  averageOrganizationalRisk,
  averageRemediationTime,
  extractRepeatVariables,
  groupRepeatVariables,
  sumData,
} from "../../util";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "yellow",
  },
}))(TableRow);

function createData(ip, generalRisk, domains, hostnames, ports, revision) {
  return { ip, generalRisk, domains, hostnames, ports, revision };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const PriorityAtentionComponent = ({ info }) => {
  //Variables globales
  const sum = info.map((item) => item.data.length);
  const totalVulns = sumData(sum);

  const allCVSS = groupRepeatVariables(
    info?.map((item) => item?.data?.map((data) => data.cvss * 1))
  );
  const AOR = averageOrganizationalRisk(sumData(allCVSS), totalVulns);

  const years = groupRepeatVariables(
    info.map((item) => item?.data?.map((item1) => item1?.cve?.substr(4, 4) * 1))
  );
  const ART = averageRemediationTime(years, totalVulns);

  //IP VARIABLES
  //Probability of Occurrence of an Event in the IP (POE)
  info?.map(
    (item) =>
      (item.vuln.poe = ((item?.data?.length * 1) / totalVulns).toFixed(2))
  );
  //Port Service Available (PSA)
  info?.map(
    (item) => (item.vuln.psa = (2 / (item?.vuln?.ports?.length * 1)).toFixed(2))
  );
  //Query Tags (QT)
  info?.map(
    (item) => (item.vuln.qt = item?.vuln?.tags?.length * 1 > 0 ? 1 : 0)
  );

  //VULNERABILITY VARIABLES
  //Total References (TR)

  console.log(info);
  addVulnVariables(info);
  const classes = useStyles();
  const rows = [];
  info.map((item) =>
    rows.push(
      createData(
        item.vuln.ip_str,
        item.data.length,
        item.vuln.domains,
        item.vuln.hostnames,
        item.vuln.ports,
        "revision"
      )
    )
  );

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>IP</StyledTableCell>
            <StyledTableCell align="right">Riesgo General</StyledTableCell>
            <StyledTableCell align="right">Dominios</StyledTableCell>
            <StyledTableCell align="right">Hostnames</StyledTableCell>
            <StyledTableCell align="right">Puertos</StyledTableCell>
            <StyledTableCell align="right">Revision Directa</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.ip}
              </StyledTableCell>
              <StyledTableCell align="right">{row.generalRisk}</StyledTableCell>
              <StyledTableCell align="right">{row.domains}</StyledTableCell>
              <StyledTableCell align="right">{row.hostnames}</StyledTableCell>
              <StyledTableCell align="right">{row.ports}</StyledTableCell>
              <StyledTableCell align="right">{row.revision}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PriorityAtentionComponent;
