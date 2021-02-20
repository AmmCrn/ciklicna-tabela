import ErrorMessage from "./ErrorMessage"
import Spiral from "./Spiral"
import { useState } from 'react'

const InputForm = ({ width, setWidth, height, setHeight, setTable }) => {
  const [errorMsg, setErrorMsg] = useState([""]);

  const onSubmit = (e) => {
    e.preventDefault();

    if(isNaN(width) || isNaN(height)){
      setErrorMsg(["Dimensions must be a number!"]);
      setTimeout(() => {setErrorMsg([""])}, 10000);
    }else if(width%1!=0 || height%1!=0){
      setErrorMsg(["Dimensions can't be decimal!"]);
      setTimeout(() => {setErrorMsg([""])}, 10000);
    }else if(width.length<=0 || height.length<=0){
      setErrorMsg(["Please enter in valid Dimensions!"]);
      setTimeout(() => {setErrorMsg([""])}, 10000);
    }else{
      setErrorMsg([""]);
      setTable(Spiral.calculateTable(width,height))
    }
  }

  return (
    <div id='inputDiv'>
      <form id="inputForm" onSubmit={onSubmit}>
        <h1>INPUT</h1>
        <hr />
        <div className="form-control">
          <label htmlFor="height">Broj redaka</label>
          <input id="height" type="text" name="height" value={width} onChange={(e) => setWidth(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="width">Broj stupaca</label>
          <input id="width" type="text" name="width" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>

        <input id="submit" type="submit" name="submit" value="KREIRAJ TABLICU" />
        <ErrorMessage errorMsg={errorMsg}></ErrorMessage>
      </form>
    </div>
  )
}

export default InputForm
