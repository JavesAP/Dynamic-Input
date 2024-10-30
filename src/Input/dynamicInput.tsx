import { InputProps } from "./types";

export const DynamicInput = ({inputProps}: 
  {
    inputProps: InputProps
  }
) => {
  return (
    <>
      <input {...inputProps}/>
    </>
  )
}