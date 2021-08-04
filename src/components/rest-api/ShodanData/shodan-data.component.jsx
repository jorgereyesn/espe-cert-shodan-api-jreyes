import React, { useEffect, useState } from "react";

const ShodanData = () => {
  const [vuln, setVuln] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    //192.188.58.99 sin vuln
    //192.188.58.61 con vuln
    const ip = "192.188.58.61";
    const apiKey = "FL5f6aSOu464esmyqf7c0kDDi0UycPNN";
    const url = "https://api.shodan.io/shodan/host/" + ip + "?key=" + apiKey;
    //https://api.shodan.io/shodan/host/192.188.58.61?key=FL5f6aSOu464esmyqf7c0kDDi0UycPNN
    const data = await (await fetch(url)).json();
    console.log(data);
    setVuln(data);
  };

  return (
    <div>
      <h1>SH API CONSUMER</h1>
      <h2>
        {vuln.org}-{vuln.ip_str}-{vuln.isp}-[{vuln.last_update}]
      </h2>

      {typeof vuln.vulns != "undefined" ? (
        <>
          <p>ESTA IP TIENE VULNERABILIDADES</p>
          {/*{vuln.vulns.map((item) =>*/}
          {/*  vuln.data.map((x) => console.log(x.vulns[item].cvss))*/}
          {/*)}*/}
          {vuln.data.map((x) =>
            vuln.vulns.map((item) =>
              console.log(vuln.data[1].vulns["CVE-2014-0117"].references)
            )
          )}
          {/*<p>{vuln.data.map((item) => console.log(item.vulns))}</p>*/}
        </>
      ) : (
        <p>ESTA IP NO TIENE VULNERABILIDADES</p>
      )}
    </div>
  );
};
export default ShodanData;
// data[1].vulns["CVE-2014-0117"].references;
// data[1].vulns
// data[1].vulns["CVE-2014-0117"];
// data[1].vulns['CVE-2014-0117'].cvss
//console.log(`${item}-${vuln.data[1].vulns[item].cvss}`)
{
  /*{vuln.vulns.map((item, index) => (*/
}
{
  /*  <li key={index}>{item}</li>*/
}
{
  /*))}*/
}
// {vuln.vulns.map((item, index) =>
//     vuln.data.map((x) => console.log(`${item}-${x.vulns[item].cvss}`))
// )}
{
  /*{*/
}
{
  /*  // vuln.data.map((item, index) => console.log(item.vulns))*/
}
{
  /*  vuln.vulns.map((item) =>*/
}
{
  /*    vuln.data.map((item1) => console.log(item1.vulns[item].cvss))*/
}
{
  /*  )*/
}
{
  /*}*/
}
