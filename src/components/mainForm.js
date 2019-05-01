import React from "react"
import useForm from "./useForm" // custom hook
import uuid from "uuid/v4" // just to create unique ids for keys

const MainForm = () => {
  // destructured values from useForm.js
  const { values, handleChange, handleSubmit, gratitudeArray } = useForm()

  return (
    <div>
      <h3>Right now I'm grateful for: </h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="current-gratitude">
          <input
            type="text"
            name="currentGratitude"
            onChange={handleChange}
            value={values.currentGratitude}
            style={{ marginRight: "20px" }}
          />
        </label>
        <button type="submit">Log my gratitude</button>
      </form>
      <div>
        <h4>Gratitude List</h4>
        <ul>
          {gratitudeArray.map(grateful => (
            <li style={{ listStyle: "none" }} key={uuid()}>
              {grateful.currentGratitude}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MainForm
