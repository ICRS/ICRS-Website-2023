import React, { Component, useState } from "react";
import axios from "axios"

function GetCheckerForm() {
  const [checkee, setCheckee] = useState(null)
  async function getData() {
    console.log('getData called')
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/all/");
      const data = response.data;
      return data;
    } catch (error) {
      console.log(error)
      return null
  }}
  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await getData()
    console.log('data',data)
    data = data.filter(datum => datum.shortCode == event.target.field.value)
    console.log(data)
    if (data[0]) {
      console.log('yay')
      setCheckee(data.filter(datum => datum.shortCode == event.target.field.value))
    }
    else {console.log('nay')}
  }
  return (
    <div className="App">
      {checkee ? 
        <p>Checkee:{JSON.stringify(checkee)}</p>
      :
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="field">Enter Shortcode:</label>
            <input 
              type="text"
              id="field"
              name="field"
            />
            <button type="submit">Go!</button>
          </div>
        </form>
      }
    </div>
  );
}

export default GetCheckerForm;
