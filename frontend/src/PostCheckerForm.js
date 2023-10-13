import React, { Component, useState } from "react";
import axios from "axios"
import cookie from 'react-cookies'

function PostCheckerForm() {
  const [checkee, setCheckee] = useState(null)


  async function getData(postData) {
    console.log('getData called')
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/check/",postData);
      const data = response.data;
      console.log(data)
      return data;
    } catch (error) {
      console.log(error)
      return null
  }}

  async function optionsRequest() {
    
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await getData(event.target.field.value)
  }

  return (
    <div className="App">
      {checkee ? 
        <p>Checkee:{JSON.stringify(checkee)}</p>
      :
        <form onSubmit={handleSubmit} method="post">
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

export default PostCheckerForm;
