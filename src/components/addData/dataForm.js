import React from 'react'
import styles from './addData.module.css'

function DataForm({ handleInputs, handleSubmit, handleOnChange, uploadValue }) {
  return (
    <div id={styles.formDiv}>
      <h1 className={styles.formH1}>Sell data</h1>
      <div className={styles.formWidth}>
        <div className={styles.dataComp}>
          <label>Data title:</label>
          <input className="form-control" type="text" name="name" onChange={handleInputs} placeholder="Fintech companies in Asia" />
        </div>
        <div className={styles.dataComp}>
          <label>Short description:</label>
          <textarea className="form-control" type="text" name="description" onChange={handleInputs} placeholder="Fintech companies established in Asia"/>
        </div>
        <div className={styles.dataComp}>
          <label>Value in USD($):</label>
          <input className="form-control" type="number" name="value" onChange={handleInputs}/>
        </div>
        <div className={styles.dataComp}>
          <label>Data type:</label>
          <select className="form-control" name="type" onChange={handleInputs} defaultValue="rawData">
            <option value="rawData">Raw Data</option>
            <option value="dataSet">Data Set</option>
          </select>
        </div>
        <div className={styles.dataComp}>
          <label>Industry: </label><br></br>
          <small>Tell us where your data belongs to</small>
          <input className="form-control" type="text" name="industry" onChange={handleInputs} />
        </div>
        <div className={styles.dataComp}>
          <label>Time frame:</label>
          <label>From:</label>
          <input className="form-control" type="date" name="timeFrameFrom" onChange={handleInputs} />
          <label>To:</label>
          <input className="form-control" type="date" name="timeFrameTo" onChange={handleInputs} />
        </div>
        <div className={styles.dataComp}>
          <label>Data sources:</label>
          <small>Tell about how your data was obtained</small>
          <input className="form-control" type="text" name="source" onChange={handleInputs} />
        </div>
        <div className={styles.dataComp}>
          <label>License:</label>
          <input className="form-control" type="text" name="license" onChange={handleInputs} />
        </div>
        <div className={styles.dataComp}>
          <label>Data format:</label>
          <select className="form-control" name="format" onChange={handleInputs} defaultValue="CSV">
            <option value="CSV">CSV</option>
            <option value="JSON">JSON</option>
            <option value="SQL">SQL</option>
            <option value="XLS">XLS</option>
            <option value="N-triples">N-triples</option>
            <option value="RDF">RDF</option>
          </select>
        </div>
        <div className={styles.dataComp}>
          <label>File name:</label>
          <input className="form-control" type="text" name="fileName" onChange={handleInputs} />
        </div>
        <br/>
        <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" value={uploadValue} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: "0%"}}/> 
        </div>
        <br/>
        <input type="file" onChange={handleOnChange}/>
        <br/><br/>
        <input className={styles.addDataBtn} type="submit"  value="Add data" onClick={handleSubmit}/>
      </div>
    </div>  
  )
}

export default DataForm