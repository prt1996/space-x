import React from "react";
import { Header } from "./Components/Header";
import { Launch } from "./Launch/Launch";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Launch
        banner=" https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
        title="FalconSat"
        launchDate="2006-03-25T10:30:00+12:00"
        Description="some Description"
      />
      <Launch
        banner=" https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg"
        title="DemoSat"
        launchDate="2007-03-21T13:10:00+12:00"
        Description="some Description"
      />
    </div>
  );
}

export default App;
