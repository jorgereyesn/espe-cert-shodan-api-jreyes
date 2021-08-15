import ShodanData from "./Layouts/ShodanData/shodan-data.component";
import DashboardComponent from "./Layouts/Dashboard/dashboard.component";
import { ExtractData } from "./components/rest-api/extract-data.component";

function App() {
  const ips = [
    "192.188.58.99",
    "192.188.58.61",
    "192.188.58.50",
    "192.188.58.45",
    "192.188.58.32",
  ];
  const info = ips.map((item) => ExtractData(item));
  return (
    <>
      <DashboardComponent info={info} />
      <ShodanData info={info} />
    </>
  );
}

export default App;
