import './button.css';

interface ButtonProps {
    text: string;
    onClick: () => void;
    id?: string;
}

export const Button = ({text, id, onClick}: ButtonProps) => {
    return (
        <button id={id} onClick={onClick}>
            {text}
        </button>
    );
} 