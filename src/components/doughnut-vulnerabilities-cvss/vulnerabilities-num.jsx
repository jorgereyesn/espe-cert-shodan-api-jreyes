import React from "react";

function VulnerabilitiesNum(info) {
  let none,
    low,
    medium,
    high,
    critical = 0;

  for (let i = 0; i < info.length; i++) {
    if (info.data[i].cvss === 0) {
      none++;
    }
    if (info.data[i].cvss > 0 && info.data[i].cvss < 3.9) {
      low++;
    }
    if (info.data[i].cvss > 3.9 && info.data[i].cvss < 6.9) {
      medium++;
    }
    if (info.data[i].cvss > 6.9 && info.data[i].cvss < 8.9) {
      high++;
    }
    if (info.data[i].cvss > 8.9 && info.data[i].cvss < 11) {
      critical++;
    }
    console.log(none, low, medium);
    return 0;
  }
}

export default VulnerabilitiesNum;
