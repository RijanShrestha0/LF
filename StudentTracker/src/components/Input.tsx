import './input.css'

interface InputProps {
    text:string
    label?:string
}

export const Input =({text, label, ...props}:InputProps & React.ComponentProps<"input">) =>{
    return(
        <div className='form-field'>
            {label && <label htmlFor={props.id}>{label}</label>}
            <input type="text" autoComplete="on" {...props} placeholder={text} />
        </div>
    )
}