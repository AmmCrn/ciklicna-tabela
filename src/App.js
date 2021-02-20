import InputForm from "./components/InputForm"
import OutputTable from "./components/OutputTable"
import { useState, useEffect, useLayoutEffect } from 'react'

function App() {
  const [width, setWidth] = useState('5');
  const [height, setHeight] = useState('5');
  const [table, setTable] = useState([[9,10,11,12,13],[8,21,22,23,14],[7,20,25,24,15],[6,19,18,17,16],[5,4,3,2,1]]);

  return (
    <div id="main" className="container">
      <header>
        <h1>Ciklična Tabela</h1>
      </header>
      <InputForm width={width} setWidth={setWidth} height={height} setHeight={setHeight} setTable={setTable}/>
      <div id="output">
        <div id="outputHeader">
          <h1>OUTPUT</h1>
          <hr />
        </div>
        <OutputTable table={table} />
      </div>
    </div>
  );
}

export default App;
