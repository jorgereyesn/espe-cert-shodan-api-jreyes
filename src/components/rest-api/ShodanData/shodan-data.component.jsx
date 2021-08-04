import React, { Component, useEffect, useState } from "react";

const ShodanData = () => {
  const [vulns, setVulns] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const ip = "192.188.58.61";
    const apiKey = "FL5f6aSOu464esmyqf7c0kDDi0UycPNN";
    const url = "https://api.shodan.io/shodan/host/" + ip + "?key=" + apiKey;
    // const data = await fetch("http://localhost:3001/shodan/data");
    const data = await fetch(url);
    const vulns = await data.json();
    // const vulns = await fetch("http://localhost:3001/shodan/data");
    console.log(vulns);
    // console.log(JSON.stringify(vulns));
    setVulns(vulns);
  };

  const listVulns = vulns.vulns.map((vuln) => <li>{vuln}</li>);

  return (
    <div>
      <h1>SHODAN DATA</h1>
      <h2>
        {vulns.org}-{vulns.ip_str}-{vulns.isp}-[{vulns.last_update}]
      </h2>
      <ul>{listVulns}</ul>
    </div>
  );
};
export default ShodanData;
