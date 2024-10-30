import React from "react"
//import { RulesType } from "./types"

export const validationFor = (inputType: string, value: string) => {
  switch(inputType) {
  case 'text': 
    return textValidation(value)
  case 'email': 
    return 
  case 'password': 
    return 
  case 'number': 
    return
  case 'phone': 
    return
  case 'url': 
    return
  default: 
    return false
  }
}

export const handleOnBlur = (inputType: string) => (event: React.FocusEvent<HTMLInputElement>) => {
  const value = event.target.value
  const validationResult = validationFor(inputType, value)
  if (validationResult) {
    console.log(`${value} is valid`)
  } else {
    event.target.style.borderColor = 'red'
  }
}

export const onFocusHandler = (inputType: string) => (event: React.FocusEvent<HTMLInputElement>) => {
  const value = event.target.value
  const validationResult = validationFor(inputType, value)
  if (validationResult) return 
}

const textValidation = (value: string) => {
  return value.length > 2 ? true : false
}