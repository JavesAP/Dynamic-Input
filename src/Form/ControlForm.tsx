import { Dispatch, SetStateAction, useState } from "react";
import { DIValidations, InputSpecifications } from "../Input/types";
import { validationFor } from "../Input/validations";

export const ControllingForm = ({ setInputSpecific }: 
{ setInputSpecific: Dispatch<SetStateAction<InputSpecifications>> }) => {
    const [inputType, setInputType] = useState('text');

    const [possibleValidation, setPossibleValidation] = useState<DIValidations>({
        minLength: undefined,
        required: undefined,
        allowNumbers: undefined,
        placeholder: undefined
    })
    
    const disableInput = {
        minimumLength: ['email', 'telephone', 'url'],
        allowNum: ['email', 'password', 'telephone']
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validations = validationFor(inputType, possibleValidation)

        setInputSpecific((prevState) => ({
          ...prevState, 
          inputType: inputType, 
          rules: {...prevState.rules, [inputType]: validations}
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="controlling-form-input-container">
                <label>Input Type:</label>
                <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="number">Number</option>
                </select>
            </div>
            <div className="controlling-form-input-container">
                <label>Minimum Length:</label>
                <input type="number" 
                  value={possibleValidation.minLength || ''} 
                  onChange={(e) => setPossibleValidation({...possibleValidation, minLength: Number(e.target.value)})}
                  disabled={disableInput.minimumLength.includes(inputType)}
                />
            </div>
            <div className="controlling-form-input-container">
                <label>Add Placeholder:</label>
                <input type="text" 
                  value={possibleValidation.placeholder || ''} 
                  onChange={(e) => setPossibleValidation({...possibleValidation, placeholder: e.target.value})}
                />
            </div>
            <div className="controlling-form-input-container">
                <label>Required:</label>
                <input type="checkbox" 
                checked={possibleValidation.required || false} 
                onChange={(e) => setPossibleValidation({...possibleValidation, required: e.target.checked})} />
            </div>
            <div className="controlling-form-input-container">
                <label>Allow Numbers:</label>
                <input type="checkbox" 
                  checked={possibleValidation.allowNumbers || false} 
                  onChange={(e) => setPossibleValidation({...possibleValidation, allowNumbers: e.target.checked})}
                  disabled={disableInput.allowNum.includes(inputType)}
                />
            </div>
            <button type="submit">Set Rules</button>
        </form>
    );
};
