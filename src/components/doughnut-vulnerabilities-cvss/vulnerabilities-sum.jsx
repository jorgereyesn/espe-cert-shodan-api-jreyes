function VulnerabilitiesSum(data) {
  let none = 0;
  let low = 0;
  let medium = 0;
  let high = 0;
  let critical = 0;

  for (let i = 0; i < data.length; i++) {
    none += data[i][0];
    low += data[i][1];
    medium += data[i][2];
    high += data[i][3];
    critical += data[i][4];
  }
  return [none, low, medium, high, critical];
}

export default VulnerabilitiesSum;
