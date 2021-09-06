import React from "react";
import DefaultButton from "./DefaultButton.js";
// eslint-disable-next-line
import { getTimestamp } from "./Helpers.js";
import unitType from "./App.js";

export default function WeatherInput({
  textInput,
  setTextInput,
  setSearchItem,
  setUnitType,
}) {
  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  /** if textInput is not blank, search input city through weather API
   *
   */
  const handleSubmit = () => {
    if (textInput !== "") {
      setSearchItem(textInput);
    }
    setTextInput("");
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

  const changeUnit = () => {
    setUnitType((prev) => !prev);
    return unitType;
  };

  return (
    <div>
      <DefaultButton type1="input-button" action={handleSubmit} text="Go" />
      <input
        className="input-box"
        value={textInput}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        placeholder="Please enter your city name"
      />
      <DefaultButton
        type1="unit-button"
        action={changeUnit}
        text={unitType ? "Metric" : "Imperial"}
      />
    </div>
  );
}
