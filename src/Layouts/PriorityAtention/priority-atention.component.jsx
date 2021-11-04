import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  averageOrganizationalRisk,
  averageRemediationTime,
  groupRepeatVariables,
  riskFactor,
  sortJSON,
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
    backgroundColor: "rgba(189,203,217)",
  },
}))(TableRow);

function createData(id, ip, cvss, risk) {
  return { id, ip, cvss, risk };
}

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const PriorityAtentionComponent = ({ info }) => {
  //GLOBAL VARIABLES
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
  info?.map((item) =>
    item?.data?.map(
      (variable) =>
        (variable.tr =
          variable?.references?.length > 10
            ? 1
            : (variable?.references?.length / 10).toFixed(2))
    )
  );

  //Exploitation Probability (EP)
  info?.map((item) =>
    item?.data?.map(
      (variable) =>
        (variable.ep =
          variable?.cvss * 1 >= 7
            ? 1
            : variable?.cvss * 1 >= 4 && variable?.cvss * 1 < 7
            ? 0.5
            : 0.1)
    )
  );

  //RISK FACTOR
  info = riskFactor(info, ART, AOR);
  const dataVuln = sortJSON(
    groupRepeatVariables(
      info?.map((item) => item?.data?.map((item1) => item1))
    ),
    "rf",
    "desc"
  );
  console.log(dataVuln);

  const classes = useStyles();
  const rows = [];
  dataVuln?.map((item, index) =>
    rows.push(
      createData(
        `ESP-vuln-` + (index + 1) + `-` + item.cve,
        item.ip,
        item.cvss,
        item.rf
      )
    )
  );
  // console.log(rows);

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">IP</StyledTableCell>
            <StyledTableCell align="center">CVSS</StyledTableCell>
            <StyledTableCell align="center">RISK FACTOR</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" align="center">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.ip}</StyledTableCell>
              <StyledTableCell align="center">{row.cvss}</StyledTableCell>
              <StyledTableCell align="center">{row.risk}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PriorityAtentionComponent;
