import { DIValidations } from "./types"
//import { RulesType } from "./types"

// Validation for DynamicInput
export const validationFor = (inputType: string, value: DIValidations) => {
  const {minLength, required, allowNumbers, placeholder} = value

  switch(inputType) {
    case 'text': 
      return {minLength, required, allowNumbers, placeholder}
    case 'email': 
      return {required, placeholder}
    case 'password': 
      return {minLength, required, placeholder}
    case 'number': 
      return { minLength, required, placeholder}
    case 'phone': 
      return { required, placeholder }
    case 'url': 
      return {}
    default: 
      return {}
  }
}

export const textValidation = (textValue: string, rules: DIValidations) => {
  const { allowNumbers, minLength, required, maxLength} = rules
  const errorMessages = []
  console.log(allowNumbers, minLength, required)
  
  if (!allowNumbers && /\d/.test(textValue)) {
    errorMessages.push('Input cannot contain numbers')
  }
  if (minLength && textValue.length < minLength) {
    errorMessages.push(`This input needs at least ${minLength} characters`)
  }
  if (maxLength && textValue.length > maxLength) {
    errorMessages.push(`This input can only have a max of ${maxLength} characters`)
  }
  if (required && !textValue) {
    errorMessages.push('This field is required')
  }
  console.log(errorMessages)
  return errorMessages
}
