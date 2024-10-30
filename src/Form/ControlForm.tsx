import { Dispatch, SetStateAction, useState } from "react";
import { InputSpecifications } from "../Input/types";

export const ControllingForm = ({ setInputSpecific }: 
{ setInputSpecific: Dispatch<SetStateAction<InputSpecifications>> }) => {
    const [inputType, setInputType] = useState('text');
    const [minLength, setMinLength] = useState<number | undefined>(undefined);
    //const [allowNumbers, setAllowNumbers] = useState<boolean | undefined>(undefined);
    const [required, setRequired] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const rules = {
          minLength,
          required,
        };
        setInputSpecific((prevState) => ({
          ...prevState, 
          inputType: inputType, 
          rules: {...prevState.rules, text: rules}
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Input Type:</label>
                <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="number">Number</option>
                </select>
            </div>
            <div>
                <label>Min Length:</label>
                <input type="number" value={minLength || ''} onChange={(e) => setMinLength(Number(e.target.value))} />
            </div>
            <div>
                <label>Required:</label>
                <input type="checkbox" checked={required} onChange={(e) => setRequired(e.target.checked)} />
            </div>
            <button type="submit">Set Rules</button>
        </form>
    );
};
