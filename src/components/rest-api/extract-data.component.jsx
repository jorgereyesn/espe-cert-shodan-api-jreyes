import { useEffect, useState } from "react";
import { extractVulns } from "../../util";

export const ExtractData = (ip) => {
  const [vuln, setVuln] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_SHODAN_API_KEY;
    const url = "https://api.shodan.io/shodan/host/" + ip + "?key=" + apiKey;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          if (typeof result.vulns != "undefined") {
            setVuln(result);
            const local = extractVulns(result.data, result.vulns);
            setData(local);
          }
        },
        // Nota: es importante manejar errores aquí y no en
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          // setIsLoaded(true);
          console.log(error);
        }
      );
  }, []);
  return { vuln, data };
};
