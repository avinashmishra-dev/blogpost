const Button = (props)=>{
    return <button onClick = {props.onFetch}>{props.children}</button>;
}

export default Button;