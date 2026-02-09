import './Select.css';

interface SelectProps {
    options: string[];
    id?: string;
    onChange: (value: string) => void;
    label?: string;
    value?: string;
}

export const Select = ({ options, id, onChange, label, value }: SelectProps) => {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
            </select>
        </>
    );
}