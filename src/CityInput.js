import React, { useState } from "react";

import DefaultButton from "./DefaultButton.js";
import { getTimestamp } from "./Helpers.js";


export default function WeatherInput() {
    const [textInput, setTextInput] = useState("");
    
    const handleChange = (e) => {
      setTextInput(e.target.value);
    };

    /** if textInput is not blank, search input city through weather API
     * 
     */
    const handleSubmit = () => {
      if (textInput !== "") {
        const newCity = {
          cityName: textInput,
          //temp: 0,
          //weatherType: "Sunny",
          //timestamp: getTimestamp(),
          //humidity: 0,
        };
        return newCity
      }
      setTextInput("");
    };
  
    /** Allow AddTodo to return on 'Enter' keypress
     * @param {string} e
     * @return {function} handleSubmit()
     */

    const handleKeypress = (e) => {
      if (e.key === "Enter") {
        console.log("keypress")
        return handleSubmit();
      }
      
    }
  return (
    <div className="inputBox">
      <DefaultButton
        type1="input-button"
        action={WeatherInput}
        text="Go"
      />
      <input
        value={textInput}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        placeholder="Please enter your city name"
      />
    </div>
  )
}