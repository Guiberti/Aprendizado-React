function Button({ text, event} : { text: string, event: () => void }) {
    return <button onClick={event}>{text}</button>
}

export default Button;