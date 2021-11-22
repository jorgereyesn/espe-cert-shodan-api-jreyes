//Extrae las vulnerabilidades encontrada dentro de toda la info arrojada por la API
export const extractVulns = (data, vulns) => {
  var val = [];
  var val1 = [];
  var count = 0;
  for (let i = 0; i < data.length; i++) {
    if (typeof data[i].vulns != "undefined") {
      val.push(data[i].vulns);
    }
  }
  // console.log(Object.keys(val[0]));
  for (let k = 0; k < vulns.length; k++) {
    count = 0;
    // console.log(vulns[k]);
    for (let j = 0; j < val.length; j++) {
      if (typeof val[j][vulns[k]] != "undefined") {
        if (vulns[k].index === val[j][vulns[k]].index && count < 1) {
          // console.log(val[j][vulns[k]]);
          val[j][vulns[k]].cve = vulns[k];
          val1.push(val[j][vulns[k]]);
          count++;
        }
      }
    }
  }
  // console.log(val1.length);
  return val1;
};

//Extrae solo una coincidencia de las variables repetidas
export const extractRepeatVariables = (data) => {
  return data.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
};

//Agrupa todos las variables de un json en un solo array
export const groupRepeatVariables = (data) => {
  const finalData = [];
  data?.map((item) => item?.map((variable) => finalData.push(variable)));
  return finalData;
};

//Cuenta las coincidencias dentro de un array, en base a las variables identificadas
export const countRepeatVariables = (variables, array) => {
  let count;
  const finalCount = [];
  for (let i = 0; i < variables.length; i++) {
    count = 0;
    for (let j = 0; j < array.length; j++) {
      if (variables[i] === array[j]) {
        count = count + 1;
      }
    }
    finalCount.push(count);
  }
  return finalCount;
};

//Cuenta las coincidencias de vulnerabilidades de acuerdo al rango CVSS
export const numberVulnerabilitiesCVSS = (info) => {
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
};

//Suma la cantidad de vulnerabilidades correspondientes al rango CVSS
export const sumVulnerabilitiesCVSS = (data) => {
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
};

//Suma de valores dentro de un array
export const sumData = (data) => {
  return data.reduce((a, b) => a + b, 0);
};

//Promedio de riesgo organizacional
export const averageOrganizationalRisk = (data, totalVuln) => {
  return (data / totalVuln).toFixed(2);
};

//Promedio de nivel de remediacion
export const averageRemediationTime = (years, totalVuln) => {
  const today = new Date();
  const currentYear = today.getFullYear();
  years = years?.map((item) => (currentYear - item) * 365);
  const average = (sumData(years) / totalVuln).toFixed(2) * 1;
  // console.log(average);
  // const average = 130;
  let ART;
  if (average >= 280) ART = 1;
  else if (average >= 140 && average < 280) ART = 0.5;
  else if (average < 140) ART = 0.1;
  return ART;
};

export const riskFactor = (info, AVT) => {
  console.log(info);
  for (let i = 0; i < info?.length; i++) {
    info[i].vuln.poe = info[i].vuln.poe * 1;
    info[i].vuln.popI = info[i].vuln.popI * 1;
    info[i].vuln.pqt = info[i].vuln.pqt * 1;
    for (let j = 0; j < info[i]?.data?.length; j++) {
      info[i].data[j].poe = info[i].vuln.poe * 1;
      info[i].data[j].popI = info[i].vuln.popI * 1;
      info[i].data[j].pqt = info[i].vuln.pqt * 1;
      info[i].data[j].cvss = info[i].data[j].cvss * 1;
      info[i].data[j].tr = info[i].data[j].tr * 1;
      info[i].data[j].po =
        (
          ((info[i].data[j].tr + info[i].data[j].ep) / 2) *
          ((info[i].vuln.poe + info[i].vuln.popI + info[i].vuln.pqt) / 3) *
          AVT
        ).toFixed(2) * 1;

      info[i].data[j].impact = info[i].data[j].cvss / 10;

      info[i].data[j].rf =
        (info[i].data[j].po * info[i].data[j].impact).toFixed(2) * 1;
      info[i].data[j].ip = info[i].vuln.ip_str;
    }
  }
  return info;
};

export const sortJSON = (data, key, orden) => {
  // eslint-disable-next-line array-callback-return
  return data.sort(function (a, b) {
    const x = a[key],
      y = b[key];

    if (orden === "asc") {
      return x < y ? -1 : x > y ? 1 : 0;
    }

    if (orden === "desc") {
      return x > y ? -1 : x < y ? 1 : 0;
    }
  });
};

//Extraer solo resultados con vulnerabilidades
export const extractDataShow = (data) => {
  const result = [];
  for (let i = 0; i < data?.length; i++) {
    if (data[i]?.data?.length > 1) {
      // console.log(data[i].data.length);
      result.push(data[i]);
    }
  }
  // console.log(result);
  return result;
};
