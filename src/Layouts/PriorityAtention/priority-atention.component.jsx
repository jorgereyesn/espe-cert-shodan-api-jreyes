import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {
  averageOrganizationalRisk,
  averageRemediationTime,
  extractRepeatVariables,
  groupRepeatVariables,
  riskFactor,
  sortJSON,
  sumData,
} from "../../util";
import { Paper } from "@material-ui/core";

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//     position: "sticky",
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     backgroundColor: "rgba(189,203,217)",
//   },
// }))(TableRow);

function createData(id, ip, cve, cvss, tr, ep, poe, popI, pqt, risk) {
  return { id, ip, cve, cvss, tr, ep, poe, popI, pqt, risk };
}

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

const PriorityAtentionComponent = ({ info }) => {
  //GLOBAL VARIABLES
  const sum = info.map((item) => item.data.length);
  const totalVulns = sumData(sum);

  const allCVSS = groupRepeatVariables(
    info?.map((item) => item?.data?.map((data) => data.cvss * 1))
  );
  const AOR = averageOrganizationalRisk(sumData(allCVSS), totalVulns);
  // console.log(AOR);

  const years = groupRepeatVariables(
    info.map((item) => item?.data?.map((item1) => item1?.cve?.substr(4, 4) * 1))
  );
  const AVT = averageRemediationTime(years, totalVulns);

  //IP VARIABLES
  //Probability of Occurrence of an Event in the IP (POE)
  info?.map(
    (item) =>
      (item.vuln.poe = ((item?.data?.length * 1) / totalVulns).toFixed(2))
  );
  //Probability of Open Ports (POP)
  const openPorts = info.map((item) => item?.vuln?.ports);
  const totalPorts = extractRepeatVariables(groupRepeatVariables(openPorts));
  info?.map(
    (item) =>
      (item.vuln.popI =
        item?.vuln?.ports?.length * 1 >= 10
          ? 1
          : ((item?.vuln?.ports?.length * 1) / totalPorts.length).toFixed(2))
  );

  //Query Tags (QT)
  info?.map(
    (item) => (item.vuln.pqt = item?.vuln?.tags?.length * 1 > 0 ? 1 : 0)
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
  info = riskFactor(info, AVT, AOR);
  const dataVuln = sortJSON(
    groupRepeatVariables(
      info?.map((item) => item?.data?.map((item1) => item1))
    ),
    "rf",
    "desc"
  );
  console.log(info);

  // const classes = useStyles();
  const rows = [];
  dataVuln?.map(({ ip, cve, cvss, tr, ep, poe, popI, pqt, rf }, index) =>
    rows.push(
      createData(
        `ESP-vuln-` + (index + 1) + `-` + cve,
        ip,
        cve,
        cvss,
        tr,
        ep,
        poe,
        popI,
        pqt,
        rf
      )
    )
  );
  // console.log(rows);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "440px" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell key="id" align="center" style={{ minWidth: 100 }}>
                ID
              </TableCell>
              <TableCell key="ip" align="center" style={{ minWidth: 90 }}>
                IP
              </TableCell>
              <TableCell key="cve" align="center" style={{ minWidth: 90 }}>
                CVE
              </TableCell>
              <TableCell key="cvss" align="center" style={{ minWidth: 90 }}>
                CVSS
              </TableCell>
              <TableCell key="tr" align="center" style={{ minWidth: 90 }}>
                TR
              </TableCell>
              <TableCell key="ep" align="center" style={{ minWidth: 90 }}>
                EP
              </TableCell>
              <TableCell key="poe" align="center" style={{ minWidth: 90 }}>
                POE
              </TableCell>
              <TableCell key="popI" align="center" style={{ minWidth: 90 }}>
                POP
              </TableCell>
              <TableCell key="pqt" align="center" style={{ minWidth: 90 }}>
                PQT
              </TableCell>
              <TableCell key="rf" align="center" style={{ minWidth: 90 }}>
                RISK FACTOR
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(
              (
                { ip, cve, cvss, tr, ep, poe, popI, pqt, risk, name, id },
                index
              ) => (
                <TableRow key={index + cve}>
                  <TableCell component="th" scope="row" align="center">
                    {id}
                  </TableCell>
                  <TableCell align="center">{ip}</TableCell>
                  <TableCell align="center">{cve}</TableCell>
                  <TableCell align="center">{cvss}</TableCell>
                  <TableCell align="center">{tr}</TableCell>
                  <TableCell align="center">{ep}</TableCell>
                  <TableCell align="center">{poe}</TableCell>
                  <TableCell align="center">{popI}</TableCell>
                  <TableCell align="center">{pqt}</TableCell>
                  <TableCell align="center">{risk}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default PriorityAtentionComponent;
