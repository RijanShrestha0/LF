interface InputProps {
    text:string
}

export const Input =({text, ...props}:InputProps & React.ComponentProps<"input">) =>{
    return(
        <input type="text" {...props} placeholder={text} />
    )
}