// custom hook to use with forms

import { useState } from "react"

const useForm = () => {
  const [values, setValues] = useState({ currentGratitude: "" })
  const [gratitudeArray, setGratitudeArray] = useState([])

  const handleSubmit = event => {
    if (event) event.preventDefault()
    setGratitudeArray(gratitudeArray => gratitudeArray.concat(values))
    setValues({ currentGratitude: "" })
  }

  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value,
    }))
  }

  return {
    handleChange,
    handleSubmit,
    values,
    gratitudeArray,
  }
}

export default useForm
