import React from "react";

const YearsCountComponent = (years) => {
  //Extraer años en un solo arreglo
  let allYears = [];
  for (let i = 0; i < years?.length; i++) {
    if (years[i]?.length > 0) {
      for (let j = 0; j < years[i]?.length; j++) {
        allYears.push(years[i][j]);
      }
    }
  }

  //Ordenar los años
  allYears = allYears.sort();
  // console.log(allYears);

  //Contar años repetidos
  const repeatYears = allYears.reduce((acc, item) => {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);

  let count;
  const finalCount = [];
  for (let i = 0; i < repeatYears.length; i++) {
    count = 0;
    for (let j = 0; j < allYears.length; j++) {
      if (repeatYears[i] === allYears[j]) {
        count = count + 1;
      }
    }
    finalCount.push(count);
  }

  return { repeatYears, finalCount };
};

export default YearsCountComponent;
