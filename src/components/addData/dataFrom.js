import React from 'react'

function DataForm({ handleInputs, handleSubmit, handleOnChange, uploadValue }) {
  return (
    <div>
      <label>Data title:</label>
      <input type="text" name="name" onChange={handleInputs} />
      <label>Short description:</label>
      <input type="text" name="description" onChange={handleInputs} />
      <label>Value:</label>
      <input type="number" name="value" onChange={handleInputs}/>
      <label>Data type:</label>
      <select name="type" onChange={handleInputs} defaultValue="rawData">
        <option value="rawData">Raw Data</option>
        <option value="dataSet">Data Set</option>
      </select>
      <label>Industry:</label>
      <p>Tell us where your data belongs to.</p>
      <input type="text" name="industry" onChange={handleInputs} />
      <label>Time frame:</label>
      <label>From:</label>
      <input type="date" name="timeFrame" onChange={handleInputs} />
      <label>To:</label>
      <input type="date" name="timeFrame" onChange={handleInputs} />
      <label>Data sources:</label>
      <p>Tell about how your data was obtained.</p>
      <input type="text" name="source" onChange={handleInputs} />
      <label>License:</label>
      <input type="text" name="license" onChange={handleInputs} />
      <label>Data format:</label>
      <select name="format" onChange={handleInputs} defaultValue="CSV">
        <option value="CSV">CSV</option>
        <option value="JSON">JSON</option>
        <option value="SQL">SQL</option>
        <option value="XLS">XLS</option>
        <option value="N-triples">N-triples</option>
        <option value="RDF">RDF</option>
      </select>
      <br/>
      <div className="progress">
        <div className="progress-bar progress-bar-striped progress-bar-animated" value={uploadValue} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: "0%"}}/> 
      </div>
      <br/>
      <input type="file" onChange={handleOnChange}/>
      <br/><br/>
      <input type="submit"  value="Add data" onClick={handleSubmit}/>
    </div>  
  )
}

export default DataForm