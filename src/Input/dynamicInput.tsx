import { useState } from "react";
import { DIValidations, InputSpecifications, ValidationRules } from "./types";
import { textValidation } from "./validations";

export const DynamicInput = ({inputSpecificRules}: {
  inputSpecificRules: InputSpecifications
}) => {
  const [inputValue, setInputValue] = useState('')
  const [inputValidity, setInputValidity] = useState<boolean | null>(null)
  const [error, setError] = useState<string[]>([])

  const { rules, inputType } = inputSpecificRules;
  const { text, email, telephone } = rules

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputType === 'text') {
      const errorArr = textValidation(inputValue, text)
      setError(errorArr)
    }
    if (error.length > 0) {
      setInputValidity(false)
    } else {
      setInputValidity(true)
    }
  }
  
  const inputRenderer = () => {
    switch(inputType) {
      case 'text': 
        return (
          <div>
            <>
              <label>Text: </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </>
          </div>
        )
        case 'email': 
        return (
          <div>
            <>
              <label>Email: </label>
              <input
                type="email"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </>
          </div>
        )
    }
  }

  return (
    <form className="dynamic-input-form"
      onSubmit={handleOnSubmit}
    >
      {inputRenderer()}
      {!inputValue && (
        <ul>
          {error.map((message, index) => <li key={`error-${index}`} className="error-message">{message}</li>)}
        </ul>
      )}
      <button type="submit">Check Validity</button>
    </form>
  );
}