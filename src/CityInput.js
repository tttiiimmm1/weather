import React, { useState } from "react";

import { getTimestamp, setToStorage } from "./helpers";


export default function weatherInput({ setAllTodos, setIsEditDisplayModal }) {
    const [textInput, setTextInput] = useState("");
  
    /** given 'e,' set inputvariable to e
     * @param {string} e
     * @return void     
     */

    const handleChange = (e) => {
      setTextInput(e.target.value);
    };
    
    /** if textInput is not blank, search input city through weather API
     * 
     */
    const handleSubmit = () => {
      if (textInput !== "") {
        const id = new Date() + textInput;
        const newCity = {
          cityName: textInput,
          temp: 0,
          weatherType,
          timestamp: getTimestamp(),
          humidity: 0,
        };
        setWeatherCard(() => {
          return newCity;
        });
        setTextInput("");
      }
    };
  
    /** Allow AddTodo to return on 'Enter' keypress
     * @param {string} e
     * @return {function} handleSubmit()
     */

    const handleKeypress = (e) => {
      if (e.key === "Enter") {
        return handleSubmit();
      }
    };