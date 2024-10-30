import { useState } from "react"
import { DynamicInput } from "../Input/dynamicInput"
import { handleOnBlur } from "../Input/validations"
import { ControllingForm } from "../Form/ControlForm"
import { InputSpecifications, ValidationRules } from "../Input/types"

export const InputContainer = ({ inputSpecificRules }: {
  inputSpecificRules: ValidationRules
}) => {
  const [inputValue, setInputValue] = useState('')
  const [isOnFocus, setIsOnFocus] = useState(false)
  return (
    <div className='dynamic-input-container'>
      <DynamicInput 
        inputProps={{
          type: 'text',
          placeholder: 'Luke',
          onChange: (e) => {
            setInputValue(e.target.value)
          },
          value: inputValue,
          onBlur: () => {
            handleOnBlur('text')
            setIsOnFocus(false)
          },
          onFocus: () => setIsOnFocus(true)
        }}
      />
      {isOnFocus && 
      <ul>
        <li>Input needs at least 2 characters</li>
      </ul>
      }
    </div>
  )
}

export const FormInputWrapper = () => {
  const [inputSpecific, setInputSpecific] = useState<InputSpecifications>({
    inputType: 'text',
    rules: {
      text: {
        minLength: undefined,
        maxLength: undefined,
        required: undefined,
        pattern: undefined,
      },
      email: {
        required: undefined,
        pattern: undefined,
      },
      telephone: {
        required: undefined,
        pattern: undefined,
      }
    }
  })
  console.log(inputSpecific)

  return (
    <div>
      <ControllingForm setInputSpecific={ setInputSpecific }/>
      <InputContainer inputSpecificRules={ inputSpecific.rules }/>
    </div>
  )
}