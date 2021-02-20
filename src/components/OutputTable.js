import { useState, useEffect } from 'react'

const OutputTable = ({ table, setErrorMsg }) =>
{
  return (
    <div id="tableContainer">
      <table>
        <tbody>
        {table.map((t) => (<tr key={Math.random().toString()}>{t.map((tt) => (<td  key={tt}>{tt}</td>))}</tr>))}
        </tbody>
      </table>
    </div>
  )
}

export default OutputTable
