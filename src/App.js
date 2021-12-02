import "./App.css";
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import HeaderApp from "./components/headerApp";
import TitleApp from "./components/titleApp";
import PanelApp from "./components/panelApp";
import SubmitApp from "./components/submitApp";

function App() {
  return (
    <div className="App">
      <HeaderApp />
      <Container>
        <TitleApp round="ปิดรับแทง 1 ธันวาคม 2564 เวลา 14:30 น."/>
        <PanelApp/>
        <SubmitApp/>
      </Container>
    </div>
  );
}

export default App;
