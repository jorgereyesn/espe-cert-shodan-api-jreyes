function VulnerabilitiesNum(info) {
  let none = 0;
  let low = 0;
  let medium = 0;
  let high = 0;
  let critical = 0;

  for (let i = 0; i < info.length; i++) {
    if (
      info[i].cvss === 0 ||
      info[i].cvss === "" ||
      info[i].cvss === "undefined"
    ) {
      none++;
    }
    if (info[i].cvss > 0 && info[i].cvss < 4) {
      low++;
    }
    if (info[i].cvss > 3.9 && info[i].cvss < 7) {
      medium++;
    }
    if (info[i].cvss > 6.9 && info[i].cvss < 9) {
      high++;
    }
    if (info[i].cvss > 8.9 && info[i].cvss < 11) {
      critical++;
    }
    // console.log(none, low, medium);
  }
  return [none, low, medium, high, critical];
}

export default VulnerabilitiesNum;
