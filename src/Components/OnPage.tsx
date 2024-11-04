import { useState } from "react"
import { DynamicInput } from "../Input/dynamicInput"
//import { handleOnBlur } from "../Input/validations"
import { ControllingForm } from "../Form/ControlForm"
import { InputSpecifications } from "../Input/types"

export const InputContainer = ({ inputSpecificRules }: {
  inputSpecificRules: InputSpecifications
}) => {
  //const [isOnFocus, setIsOnFocus] = useState(false)

  const { inputType, rules } = inputSpecificRules
  console.log(inputType, rules)

  return (
    <div className='di-form-container'>
      <DynamicInput inputSpecificRules={ inputSpecificRules }/>
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
        placeholder: undefined,
      },
      email: {
        required: undefined,
        placeholder: undefined
      },
      telephone: {
        required: undefined,
        placeholder: undefined
      }
    }
  })

  return (
    <div className="contForm-and-dInput-container">
      <ControllingForm setInputSpecific={ setInputSpecific }/>
      <InputContainer inputSpecificRules={ inputSpecific }/>
    </div>
  )
}